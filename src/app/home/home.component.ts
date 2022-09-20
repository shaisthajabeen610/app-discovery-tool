import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges {

  val: any;
  name: any="";
  cloud: any;
  homedata: any[]=[];
  firstname:any=null;
  cloud1: any;
  selectedElement:any;
  checking:any;
  toggle:boolean =false;
  homeDataInputs: any[] = [];

  constructor
  (
    public router:Router, 
    private passData: PassDataService,

  ) { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }
  refresharray(){
    this.homedata=[];
  }
  onSelect(e:any){
    
    this.val=e.target.value
    this.allower()
  }
  
  inputname(e:any){
    this.name=e.target.value;
    this.allower()
  }
  selectedCloud(e:any){
    this.cloud=e.target.value
    this.allower()
    
  }
  onCancel(e:any){
   this.checking=e.value;
    this.router.navigate(['/home'])
    this.cloud1=null
    e.value='';
    this.selectedElement=null;
    this.refresharray();
  }

  homeDataSaver() {
    this.homedata = [];
    if( 
      this.name!=="" && 
      this.val!==0 && 
      this.cloud!==undefined) 
    {

      this.homedata.push(this.val)
      this.homedata.push(this.cloud)
      this.homedata.push(this.name)
    }
  }

  homeDataSender() {
    this.homeDataSaver()
    this.passData.homeDataChanges(this.homedata)
  }

  allower() {
    if( 
        this.name!=="" && 
        this.val!==0 && 
        this.cloud!==undefined
      ) 
    {
      this.homeDataSender()
    }
  }

  onContinue(e:any){
    this.refresharray();
    this.homedata.push(this.val)
    this.homedata.push(this.cloud)
    this.homedata.push(this.name)
    if(this.name!=="" && this.val!==0 && this.cloud!==undefined){
      this.router.navigate(['/sheet'],{queryParams:{data:this.homedata}});
      this.refresharray();
      
    }

  }


}
