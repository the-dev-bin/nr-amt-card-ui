import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

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
    notes: new FormControl('',[])
  })
  constructor() { }

  ngOnInit(): void {

  }
  public completeScan(event){
    console.log(event);
    this.startScan = false;
  }
  public onSubmit(){
    this.startScan = true;
  }

}
