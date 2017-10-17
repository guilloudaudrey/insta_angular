import { Routes } from "@angular/router";
import { FicheUserComponent } from "./fiche-user/fiche-user.component";
import { UserComponent } from "./user/user.component";
import { AuthComponent } from "./auth/auth.component";



export const appRoutes:Routes = [
    {path:'users',component:UserComponent},
    {path: 'user/:id', component: FicheUserComponent},
    {path: '**', component:AuthComponent}

];