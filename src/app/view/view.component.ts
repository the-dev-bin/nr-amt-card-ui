import { Component, OnInit } from '@angular/core';
import { AmtcardAPIService } from "../services/amtcard-api.service";
import { Player } from '../models/player.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public startScan: Boolean = true;
  constructor(public amtcardAPI: AmtcardAPIService) { }
  public playerInfo: Player;
  ngOnInit(): void {
  }
  public completeScan(event){
    console.log(event);
    this.startScan = false;
    this.playerInfo = null;
    this.amtcardAPI.getPlayer(event).subscribe((player) => this.playerInfo = player, (error)=> console.log(error), ()=> console.log(this.playerInfo));
  }
  public resetPlayer(){
    this.startScan = true;
    this.playerInfo = null;
  }
}
