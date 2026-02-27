import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { BookRoom } from './book-room/book-room';
import { RoomPicker } from './room-picker/room-picker';

export const routes: Routes = [
    { path: 'bookroom/:id', component: BookRoom },
    { path:'', component:RoomPicker}
];
