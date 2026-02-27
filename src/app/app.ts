import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from "./top-menu/top-menu";
import { RoomPicker } from "./room-picker/room-picker";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenu, RoomPicker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('superiorbb');
}
