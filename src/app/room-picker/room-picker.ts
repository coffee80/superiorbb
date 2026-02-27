import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { UserService } from '../user-service';
import { RoomService } from '../room-service';
import { Guest, RoomCategory } from '../model/hotel.entities';
import { RoomCategoryPicker } from "../room-category-picker/room-category-picker";
import { FormsModule } from '@angular/forms';
import { GuestPicker } from '../guest-picker/guest-picker';

@Component({
  selector: 'app-room-picker',
  imports: [RoomCategoryPicker, FormsModule, GuestPicker],
  templateUrl: './room-picker.html',
  styleUrl: './room-picker.css',
})
export class RoomPicker {
    /*
        RoomPicker è un componente pensato per prendere tutta la pagina
        partendo dalla selezione della categoria
        e poi selezionando la singola camera e dipende da due date
    */
    userService = inject(UserService);
    roomService = inject(RoomService);
    loggedUser = this.userService.loggedUser;
    from = signal<Date | null>(null);
    to = signal<Date | null>(null);
    guest = signal<Guest | null>(null);

    freeRoomsByCategories = signal<RoomCategory[]>([]);
    

    // per ora due date fisse, presto due date inserite da utente
    d1 ="2026-02-27";
    d2= "2026-02-28";

    constructor(){
        // un signal che viene eseguito quando un altro signal cambia
        // somiglia a computed, ma computed viene RICALCOLATO quando un altro signal cambia
        // effect esegue solo delle azioni, non è tenuto a fare calcoli
        // in questo caso lo uso per fare una chiamata HTTP
        effect(()=>{

            if(this.loggedUser()==null)
                return;

            let id:number = this.loggedUser()?.hotel.id ?? 0;
            this.roomService.findFreeRoomsForHotel(id, this.d1, this.d2).subscribe({
                next:(categories)=>this.freeRoomsByCategories.set(categories),
                error:(error)=>{console.log(error)}
            });

        });
    }
}
