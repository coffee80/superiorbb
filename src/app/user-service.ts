import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from './model/hotel.entities';
import { Observable, tap } from 'rxjs';
/*
    io non mi limito a fare chiamate api
    io conservo anche un utente loggato diverso per ogni client
    potenzialmente...
    ogni client potrà memorizzare al suo interno
    un utente loggato diverso

*/
@Injectable({
  providedIn: 'root',
})
export class UserService {
  
    // cominciamo caricando un utente standard senza login 
    // solo per provare quello che devo provare

    http = inject(HttpClient);

    private _loggedUser = signal<User | null>(null);
    loggedUser = this._loggedUser.asReadonly();

    constructor(){
    }

    public doLogin(username:string, password:string):Observable<any>{
        return this.http.post("http://localhost:8080/sbb/api/users/login", {username:username, password:password})
        .pipe(tap((json:any) => {
                const token = json.token;
                // ci servirà dopo...
                localStorage.setItem('token', token);
                const payload = JSON.parse(atob(token.split('.')[1]));
                
                const user: User = {
                    id: payload.id,
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    role: payload.role,
                    hotel: {
                        id: payload.hotelId,
                        name: payload.hotelName,
                        address: payload.hotelAddress,
                        city: payload.hotelCity
                    }
                };
                this._loggedUser.set(user);
            })
        );
    }
}
