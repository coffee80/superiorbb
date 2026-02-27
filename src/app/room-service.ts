import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RoomCategory } from './model/hotel.entities';
import { Observable } from 'rxjs';

/*
    per comodità qui mi occupo sia di Room propriamente dette che di Room Category
*/

@Injectable({
  providedIn: 'root',
})
export class RoomService {
    
    http = inject(HttpClient);
    freeRoomsUrl = "http://localhost:8080/sbb/api/rooms/free/";
    

    public findFreeRoomsForHotel(id:number, from:string, to:string):Observable<RoomCategory[]>{
        let url = this.freeRoomsUrl+id+"/"+from+"/"+to;
        return this.http.get<RoomCategory[]>(url);
    }

}
