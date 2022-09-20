import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PassDataService } from '../pass-data.service';



@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit , OnChanges{

  @Input('appVal') appval: any;
  @Input('appCloud') appcloud: any;
  @Input('name') name: any;
  // @Input('pagecount') pagecount: number;
  businessUnitScore: any=0; 
  // appval: any;
  // appcloud: string;
  isNextButtonDisabled: boolean = false;
  appname: any;
  pagecount: number = 0;
  pageCountRenderer: number = 0
  dropsdownValue1:any;
  dropsdownValue2:any;
  dropsdownValue3:any;
  dropsdownValue4:any;
  dropsdownValue5:any;
  dropsdownValue6:any;
  dropsdownValue7:any;
  dropsdownValue8:any;
  dropsdownValue9:any;
  dropsdownValue10:any;
  dropsdownValue11:any;
  dropsdownValue12:any;
  dropsdownValue13:any;
  dropsdownValue14:any;
  dropsdownValue15:any;
  dropsdownValue16:any;
  dropsdownValue17:any;
  dropsdownValue18:any;
  dropsdownValue19:any;
  dropsdownValue20:any;
  dropsdownValue21:any;
  dropsdownValue22:any;
  dropsdownValue23:any;
  dropsdownValue24:any;
  dropsdownValue25:any;
  dropsdownValue26:any;
  dropsdownValue27:any;
  dropsdownValue28:any;
  dropsdownValue29:any;


  ngOnInit(): void {
     this.pagecount = 0;
     this.scorearray = []
  }  

  val:number=0;
   
  businessfunScore:any=0 ;
  appScore: any=0;
  appAgeScore: any=0;
  codeSizeScore:any=0;
  appUsersScore:any=0;
  criticalityScore:any=0;
  layerScore:any=0;
  layerScore1: any=0;
  layerScore2: any=0;
  layerScore3: any=0;
  layerScore4: any=0;
  layerScore5: any=0;
  layerScore6: any=0;
  layerScore7: any=0;
  layerScore8: any=0;
  layerScore9: any=0;
  serversScore: any=0;
  layerScore10: any=0;
  layerScore11: any=0;
  layerScore12: any=0;
  layerScore13: any=0;
  impactScore: any=0;
  layerScore14: any=0;
  devOpsScore: any=0;
  layerScore15: any=0;
  scorearray:any[]=[];
  constructor( 
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private passDataService: PassDataService
    ) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.pagecount = 0;
    this.pageCountRenderer = 0;
    this.scorearray = [];
    this.isNextButtonDisabled = false;
  }

  sheetDataSender() {
    this.passDataService.sheetDataChanges(this.scorearray)
  }
  

   businessUnit=[
     {label:'Sales', value:	4},
    {label:'Production' ,value:	5},
    {label:'Testing' ,value:	2},
    {label:'Development' ,value:	1},
    {label:'Marketing' ,value:	2},
    {label:'IT Systems' ,value:	3},
    {label:'Billing'  ,value:	5}
    ];
   
  changeBusinessUnit(e:any){
    let temp=e.target.value;
    for(let i = 0;i<this.businessUnit.length;i++) {
      if(temp === this.businessUnit[i].label) {

        this.businessUnitScore = this.businessUnit[i].value
        this.totalScores.push(this.businessUnitScore);

      }

    }
  }
    applicationBusinessFuncionality=[
      {label:'Policy Admin System',value:5},
      {label:'Billing System',value:	5},
      {label:'Claim Management System',value:	5},
      {label:'Content Management System',value:	5},
      {label:'Downstream System',value:	5},
      {label:'Rating System',value:	5}
    ];
    changeApplicationFunctionality(e:any){
      let temp=e.target.value;
     for(let i = 0;i<this.applicationBusinessFuncionality.length;i++) {
      if(temp === this.applicationBusinessFuncionality[i].label) {
        this.businessfunScore = this.applicationBusinessFuncionality[i].value
        this.totalScores.push(this.businessfunScore);

      }

    }
   
  }
  appName=[
    {label:'WINS - PAS'},
    { label:'Duckcreek'},
      { label:'Guidewire ClaimCenter'},
      { label:'WINS - Billing'},
      { label:'Access DB - Billing'}
  ]
  appCode=[
    {label:'.Net Platform'},
     {label:'Java Platform'},
    {label:' Php Platform'},
    {label:' C++ Platform'},
    {label:' Duckcreek'},
    {label:' WINS'},
    {label:' Guidewire'},
    {label:' Access DB'} 
  ]
  appAge=[
    {label:'3'	,value:1},
    {label:'5'	,value:3},
    {label:'10',value:	5}
  ]
  codeSize=[
    
     {label:'10000-25000',value:	1},
     {label:'25001-50000',value:	2},
     {label:'50001-100000',value:	3},
     {label:'100000 & more',value:	5}
    
  ]
  sapplicationType=[
    {label:'Customer Facing',value:	5},
     {label:'User Interface',value:	5},
     {label:'Transaction Processing',value:	5},
     {label:'Dataware house',value:	5},
     {label:'Database',value:	5}
  ]
  devOps=[
    {label:'Managed by Client Team', value:	1},
    {label:'Outsourced', value:	5},
    {label:'TBD', value: 0}  
  ]
  appUsers=[
    {label:'1-1000',value:	1},
    {label:'1000-5000',value:	2},
    {label:'5000-10000',value:	3},
    {label:'10000+',value:	5}
  ]
  oS=[
    {label:'Windows'},
    {label:'Linux'}
  ]
  servers=[
    {label:'1 - 25 servers',value:	2},
    {label:'26 - 50 servers',value:	3},
    {label:'51 - 100 servers',value:	5}
  ]
  impact=[
    {label:'$10,000',value: 	1}, 
    {label:'$10001 to $50000',value:	3 },
    {label:'$50000 or more',value:	5 },
  ]
  layer=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer1=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer5=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer2=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer3=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer4=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer6=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer7=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer8=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer9=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer10=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer11=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer12=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer13=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer14=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  layer15=[
    {label:'yes',value:	5},
    {label:'No',value: 0}
  ]
  businessCrticality=[
    {label:'Critical',value:	5},
    {label:'High',value:	3},
    {label:'low',value:	2},
    {label:'Non Production',value:	1}
  ]
  changeApptype(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.sapplicationType.length;i++) {
      if(temp === this.sapplicationType[i].label) {
        this.appScore = this.sapplicationType[i].value
        this.totalScores.push(this.appScore);
      }
    }
  }
  changeDevOps(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.devOps.length;i++) {
      if(temp === this.devOps[i].label) {
        this.devOpsScore = this.devOps[i].value
        this.totalScores.push(this.devOpsScore);
      }
    }
  }
  changeAppAge(e:any){

    let temp=e.target.value;
    for(let i = 0;i<this.appAge.length;i++) {
     if(temp === this.appAge[i].label) {
       this.appAgeScore = this.appAge[i].value
       this.totalScores.push(this.appAgeScore);
     }
   }
  }
  changeCodeSize(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.codeSize.length;i++) {
      if(temp === this.codeSize[i].label) {
        this.codeSizeScore = this.codeSize[i].value
        this.totalScores.push(this.codeSizeScore);
      }
    }
  }
  
  changeAppUsers(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.appUsers.length;i++) {
      if(temp === this.appUsers[i].label) {
        this.appUsersScore = this.appUsers[i].value
        this.totalScores.push(this.appUsersScore);
      }
    }
  }
  changeServers(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.servers.length;i++) {
      if(temp === this.servers[i].label) {
        this.serversScore = this.servers[i].value
        this.totalScores.push(this.serversScore);
      }
    }
  }
  changeImpact(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.impact.length;i++) {
      if(temp === this.impact[i].label) {
        this.impactScore = this.impact[i].value
        this.totalScores.push(this.impactScore);
      }
    }
  }
  changeCrticality(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.businessCrticality.length;i++) {
      if(temp === this.businessCrticality[i].label) {
        this.criticalityScore = this.businessCrticality[i].value
        this.totalScores.push(this.criticalityScore);
      }
    }
  }
  totalScores: any[]=[];
  changeLayer(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer.length;i++) {
      if(temp === this.layer[i].label) {
        this.layerScore = this.layer[i].value
        this.totalScores.push(this.layerScore);
      }
    }
  }
  changeLayer3(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer3.length;i++) {
      if(temp === this.layer3[i].label) {
        this.layerScore3 = this.layer3[i].value
        this.totalScores.push(this.layerScore3);
      }
    }
  }
  changeLayer4(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer4.length;i++) {
      if(temp === this.layer4[i].label) {
        this.layerScore4= this.layer4[i].value
        this.totalScores.push(this.layerScore4);
      }
    }
  }
  changeLayer1(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer1.length;i++) {
      if(temp === this.layer1[i].label) {
        this.layerScore1 = this.layer1[i].value
        this.totalScores.push(this.layerScore1);
      }
    }
  }
  changeLayer2(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer2.length;i++) {
      if(temp === this.layer2[i].label) {
        this.layerScore2= this.layer2[i].value
        this.totalScores.push(this.layerScore2);
      }
    }
  }
  changeLayer5(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer5.length;i++) {
      if(temp === this.layer5[i].label) {
        this.layerScore5= this.layer5[i].value
        this.totalScores.push(this.layerScore5);
      }
    }
  }
  changeLayer6(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer6.length;i++) {
      if(temp === this.layer6[i].label) {
        this.layerScore6= this.layer6[i].value
        this.totalScores.push(this.layerScore6);
      }
    }
  }
  changeLayer7(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer7.length;i++) {
      if(temp === this.layer7[i].label) {
        this.layerScore7= this.layer7[i].value
        this.totalScores.push(this.layerScore7);
      }
    }
  }
  changeLayer8(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer8.length;i++) {
      if(temp === this.layer8[i].label) {
        this.layerScore8= this.layer8[i].value
        this.totalScores.push(this.layerScore8);
      }
    }
  }
 
   changeLayer9(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer9.length;i++) {
      if(temp === this.layer9[i].label) {
        this.layerScore9= this.layer9[i].value
        this.totalScores.push(this.layerScore9);
      }
    }
  }
  changeLayer10(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer10.length;i++) {
      if(temp === this.layer10[i].label) {
        this.layerScore10= this.layer10[i].value
        this.totalScores.push(this.layerScore10);
      }
    }
  }
  changeLayer11(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer11.length;i++) {
      if(temp === this.layer11[i].label) {
        this.layerScore11= this.layer11[i].value
        this.totalScores.push(this.layerScore11);
      }
    }
  }
  changeLayer12(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer12.length;i++) {
      if(temp === this.layer12[i].label) {
        this.layerScore12= this.layer12[i].value
        this.totalScores.push(this.layerScore12);
      }
    }
  }
  changeLayer13(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer13.length;i++) {
      if(temp === this.layer13[i].label) {
        this.layerScore13= this.layer13[i].value
        this.totalScores.push(this.layerScore13);
      }
    }
  }
  changeLayer14(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer14.length;i++) {
      if(temp === this.layer14[i].label) {
        this.layerScore14= this.layer14[i].value
        this.totalScores.push(this.layerScore14);
      }
    }
  }
  changeLayer15(e:any){
    let temp=e.target.value;
     for(let i = 0;i<this.layer15.length;i++) {
      if(temp === this.layer15[i].label) {
        this.layerScore15= this.layer15[i].value
        this.totalScores.push(this.layerScore15);
      }
    }
  }
  public isFinalValueVisible=false;
  refresh(){
      
  this.businessUnitScore=0;
  this.businessfunScore =0;
  this.appScore=0;
  this.devOpsScore=0;
  this.appAgeScore=0;
  this.codeSizeScore=0;
  this.appUsersScore=0;
  this.serversScore=0;
  this.impactScore=0;
  this.criticalityScore=0;
  this.layerScore=0;
  this.layerScore1=0;
  this.layerScore2=0;
  this.layerScore3=0;
  this.layerScore4=0;
  this.layerScore5=0;
  this.layerScore6=0;
  this.layerScore7=0;
  this.layerScore8=0;
  this.layerScore9=0;
  this.layerScore10=0;
  this.layerScore11=0;
  this.layerScore12=0;
  this.layerScore13=0;
  this.layerScore14=0;
  this.layerScore15=0;
    this.totalScores=[];
    this.dropsdownValue1=null;
    this.dropsdownValue2=null;
    this.dropsdownValue3=null;
    this.dropsdownValue4=null;
    this.dropsdownValue5=null;
    this.dropsdownValue6=null;
    this.dropsdownValue7=null;
    this.dropsdownValue8=null;
    this.dropsdownValue9=null;
    this.dropsdownValue10=null;
    this.dropsdownValue11=null;
    this.dropsdownValue12=null;
    this.dropsdownValue13=null;
    this.dropsdownValue14=null;
    this.dropsdownValue15=null;
    this.dropsdownValue16=null;
    this.dropsdownValue17=null;
    this.dropsdownValue18=null;
     this.dropsdownValue19=null;
     this.dropsdownValue20=null;
     this.dropsdownValue21=null;
     this.dropsdownValue22=null;
     this.dropsdownValue23=null;
     this.dropsdownValue24=null;
     this.dropsdownValue25=null;
     this.dropsdownValue26=null;
     this.dropsdownValue27=null;
     this.dropsdownValue28=null;
     this.dropsdownValue29=null;

    


  }

  onSave(){
    console.log(this.totalScores,'total score')
    this.val=0;
    let tempAppVal = parseInt(this.appval)
    
    this.scorearray[0]=this.name;
    for(let  i=0;i<this.totalScores.length;i++){
      this.val+=parseInt(this.totalScores[i]);
    }
    this.refresh();
    
    console.log(this.pagecount,'page count',tempAppVal,"app val")

   if(this.pagecount < tempAppVal){
    this.router.navigate(['sheet']);
    this.scorearray.push(this.val);
    this.pagecount++;
  }

  if(this.pagecount === tempAppVal){
    this.sheetDataSender();
    this.isNextButtonDisabled = true;
    return;
  }
    
    console.log(this.scorearray,"score array n");

    this.pageCountRenderer++;
    
    this.isFinalValueVisible=true;
  }
 
}