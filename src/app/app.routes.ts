import { Routes } from "@angular/router";
import { FicheUserComponent } from "./fiche-user/fiche-user.component";



/*
    Les routes vont devoir définir le path (l'url) et 
    le component à associer à ce path. Si l'url match
    un path, le component en question sera instancié et
    placé à l'intérieur de la balise <router-outlet>
*/

export const appRoutes:Routes = [
    {path: 'user/:id', component: FicheUserComponent},
    //On peut faire des redirections sur certaines routes
    // {path: '', pathMatch:'full' , redirectTo: '/chiens'},
    // //Cette route est la wildcare, elle match toutes les
    // //routes et doit donc être placée en dernier sous 
    // //peine de la voir prendre le dessus sur toutes les
    // //autres. On peut s'en servir pour faire un 404
    // {path: '**', component:PageNotFoundComponent}
];