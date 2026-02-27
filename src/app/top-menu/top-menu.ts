import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-top-menu',
  imports: [RouterLink],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.css',
})
export class TopMenu {

    userService = inject(UserService);
    loggedUser = this.userService.loggedUser;

}
