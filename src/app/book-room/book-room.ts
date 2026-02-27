import { Component, input } from '@angular/core';

@Component({
  selector: 'app-book-room',
  imports: [],
  templateUrl: './book-room.html',
  styleUrl: './book-room.css',
})
export class BookRoom {
    // componente per inserire una prenotazione

    // l'id non arriva dal padre, ma dal router. questa è una route parametrica
    id = input.required<number>();

}
