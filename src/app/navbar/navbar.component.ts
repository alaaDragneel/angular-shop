import { Component } from '@angular/core';
import { AuthService } from "../services/auth/auth.service";
import { AppUser } from "../models/app-user";
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent {
    isNavbarCollapsed = true;
    appUser: AppUser;
    
    constructor (private auth: AuthService) {
        auth.appUser$.subscribe(appUser => this.appUser = appUser);
    }

    logout () {
        this.auth.logout();
    }

}
