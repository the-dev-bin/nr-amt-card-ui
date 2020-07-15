import { Component, OnInit } from '@angular/core';
import { AmtcardAPIService } from "../services/amtcard-api.service";
import { User } from '../models/user.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public startScan: Boolean = true;
  constructor(public amtcardAPI: AmtcardAPIService) { }
  public userInfo: User;
  ngOnInit(): void {
  }
  public completeScan(event){
    console.log(event);
    this.startScan = false;
    this.userInfo = null;
    this.amtcardAPI.getUser(event).subscribe((user) => this.userInfo = user, (error)=> console.log(error), ()=> console.log(this.userInfo));
  }
  public resetUser(){
    this.startScan = true;
    this.userInfo = null;
  }
}
