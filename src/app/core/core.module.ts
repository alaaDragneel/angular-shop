import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HomeComponent } from "core/components/home/home.component";
import { NavbarComponent } from "core/components/navbar/navbar.component";
import { LoginComponent } from "core/components/login/login.component";
import { GuestGuard } from "shared/services/auth/guest-guard.service";
import { SharedModule } from "shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([]),
    ],
    declarations: [
        NavbarComponent,
        HomeComponent,
        LoginComponent
    ],
    exports: [
        NavbarComponent
    ],
    providers: [
        GuestGuard
    ]
})
export class CoreModule {
}
