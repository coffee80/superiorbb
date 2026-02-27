import { Component, input, model, signal } from '@angular/core';
import { RoomCategory } from '../model/hotel.entities';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-category-picker',
  imports: [RouterLink, FormsModule],
  templateUrl: './room-category-picker.html',
  styleUrl: './room-category-picker.css',
})
export class RoomCategoryPicker {

    // signal in ingresso di sola lettura
    roomCategory = input.required<RoomCategory>();
   
    from    = signal<Date | null>(null);
    to      = signal<Date | null>(null);

    
}
