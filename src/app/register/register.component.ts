import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { AmtcardAPIService } from '../services/amtcard-api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;
  public startScan: Boolean = false;
  
  cardDetails = new FormGroup({
    mundane_name: new FormControl('',[Validators.required]),
    persona_name: new FormControl('',[Validators.required]),
    age: new FormControl(''),
    notes: new FormControl('',[]),
  })
  constructor(public amtcardAPI: AmtcardAPIService) { }

  ngOnInit(): void {

  }
  public completeScan(event){
    console.log(event);
    this.startScan = false;
    this.amtcardAPI.newUser(new User().deserialize({
      "card_id": event,
      "mundane_name": this.cardDetails.value.mundane_name,
      "persona_name": this.cardDetails.value.persona_name,
      "age": this.cardDetails.value.age,
      "notes": this.cardDetails.value.notes,
    })).subscribe();
  }
  public onSubmit(){
    this.startScan = true;
  }
  public cancelScan(){
    this.startScan = false;
    this.cardDetails.reset();

  }

}
