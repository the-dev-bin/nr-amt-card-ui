import { Injectable } from '@angular/core';
import { User } from "../models/user.model";
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmtcardAPIService {
  constructor(private httpService: HttpClient) { }


  public getUser(cardID: string): Observable<User>{
    return this.httpService.get<User>(`https://api.nr-amtcard.com/get_user?card_id=${cardID}`).pipe(
      map(data => new User().deserialize(data))
    );
  }
  public editUser(cardID: string){

  }
  public newUser(cardID: string, details: User): Observable<User>{
    return this.httpService.post<User>("https://api.nr-amtcard.com/register_user", JSON.stringify(User));
  }
}
