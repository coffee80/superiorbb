import { Routes } from '@angular/router';
import { BookRoom } from './book-room/book-room';
import { FormLogin } from './form-login/form-login';

export const routes: Routes = [
    { path:'', component:BookRoom},
    { path:'login', component:FormLogin}
];
