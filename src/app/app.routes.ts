import { Routes } from '@angular/router';
import { BookRoom } from './book-room/book-room';
import { FormLogin } from './form-login/form-login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path:'', component:BookRoom, canActivate: [authGuard]},
    { path:'login', component:FormLogin}
];
