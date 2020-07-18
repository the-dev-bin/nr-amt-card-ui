import { Injectable } from '@angular/core';
import { Player } from "../models/player.model";
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmtcardAPIService {
  constructor(private httpService: HttpClient) { }


  public getPlayer(cardID: string): Observable<Player>{
    return this.httpService.get<Player>(`https://api.nr-amtcard.com/get_user?card_id=${cardID}`).pipe(
      map(data => new Player().deserialize(data))
    );
  }
  public editPlayer(cardID: string){

  }
  public newPlayer(details: Player): Observable<any>{
    return this.httpService.post("https://api.nr-amtcard.com/register_user", details);
  }
}
