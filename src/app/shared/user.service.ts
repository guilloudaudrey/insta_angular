import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { User } from "./User";

@Injectable()
export class UserAjaxService {
    private urlAPI:string = 'http://localhost:3000/user';
    
    constructor(private http:HttpClient){}


    getAllUsers():Observable<User[]> {
        return this.http.get<User[]>(this.urlAPI).catch(this.handleError);
    }

    // addUser(user:User):Promise<User> {
    //     return this.http.post(this.urlAPI, user).toPromise();
    // }

    getUserById(id:number):Observable<User> {
      return this.http.get<User>(this.urlAPI+'/'+id)
      .catch(this.handleError);
    }

    removeUser(user:User):Promise<any> {
        return this.http.delete(this.urlAPI+'/'+user.id).toPromise();
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
}
}