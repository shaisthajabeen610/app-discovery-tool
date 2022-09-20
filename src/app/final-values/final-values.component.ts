import { Component,  OnChanges,  OnInit, SimpleChanges,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassDataService } from '../pass-data.service';
import { HttpClient } from "@angular/common/http";

import jsPDF from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Angular2Txt } from 'angular2-txt';

import {BlobServiceClient,AnonymousCredential,newPipeline } from '@azure/storage-blob';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';

import { CookieService } from 'ngx-cookie-service';

export interface MyData{
  finalScore:any,
  impactScore:any,
  prioritization:any,
  iaasCost:any,
  passApp:any
}


@Component({
  selector: 'app-final-values',
  templateUrl: './final-values.component.html',
  styleUrls: ['./final-values.component.css']
})


export class FinalValuesComponent  implements OnInit,MyData, OnChanges{
  @ViewChild('content', {static: false}) content?: ElementRef;
  envName: string="";
  passApp:any;
  iaasCost:any ;
  finalScore:any; 
  impactScore: any ;
  val:any=0;
  prioritization: any;
  fileName: any;
  finaltablen: number =1;
  loop: any;
  data:any[]=[];
  rowcount:any=0;
  doo:MyData = <any>[];
  arr: any=[];
  arr2:any=[];
  skuname: string="";
  data_filter:any;
  mname:String="";
  complexityArray:any[]=[];
  fileEnvName:any;
  sheetData: any=[];
  key: any;
  pacteraLogoUrl = {
    logoUrl : 
    "'https://user-images.githubusercontent.com/67311615/180364554-b99d5cfb-6777-4051-b02c-44d2855b1a24.png'"
  }
  ;
  isSavePDFClicked: boolean = false;
  date: any;
  currentFile: any;

  constructor(  
    private routes:Router,
    private activatedRoute:ActivatedRoute,
    private passDataService: PassDataService,
    private httpClient: HttpClient,
    public cookie: CookieService
    )
    
    { 
     
    }
  ngOnChanges(changes: SimpleChanges): void {
    this.arr=[];
    this.sheetData = [];
    this.sheetDataReceiver()
  }
 


  ngOnInit(): void {

    this.arr=[];
    this.sheetData = []
    this.sheetDataReceiver();  
   // this.cookieData();
   // console.log("in ngonit")
    //  this.httpClient.get('assets/My_Report.txt', {responseType: 'text'})
    //   .subscribe(data => console.log(data,'report data'));

    //  fetch('C:/Users/naveen.chennagalla/Downloads/My_Report.txt')
    // .then(response => response.text())
    // .then(data => {
    //     console.log(data,'my report data');
    // });
         
  }

  sheetDataReceiver() {
    this.sheetData = [];
    this.complexityArray = []
    this.passDataService.sheetData.subscribe((data)=> {
      this.sheetData = data;
      this.envName = this.sheetData[0];
      this.complexityArray.push(this.envName)
      this.arr=[];
      for(let i=1; i<this.sheetData.length; i++) {
        console.log(this.sheetData[i],'updated data')
        this.loop = this.sheetData[i];
        console.log('loop',this.loop)
        this.calculation(this.loop)
        this.cookieData();
      }
      console.log("Sheet data in final values",this.sheetData)
    })
  }



    calculation(sum:any){
      
      console.log("sum",sum)      
      
      if(sum <50 && this.arr.length < this.sheetData.length-1 ){
        this.arr.push({finalScore:'Simple',
          impactScore:'Low Business Impact',
          prioritization:'Quick Wins',
          iaasCost:'Yes',
          passApp:'No'

        })
        this.complexityArray.push('Simple')
      }

      if(sum >= 50 && sum < 80 && this.arr.length < this.sheetData.length-1){
        
        this.arr.push({finalScore:'Medium',
          impactScore:'Medium Business Impact',
          prioritization:'Core Cloud',
          iaasCost:'Yes',
          passApp:'No'

        })
        this.complexityArray.push('Medium')
      }
      if(sum >= 80 && this.arr.length < this.sheetData.length-1)
      {
        this.arr.push({finalScore:'Complex',
          impactScore:'Complex Business Impact',
          prioritization:'Long Term Bets',
          iaasCost:'No',
          passApp:'Yes'
        })
        this.complexityArray.push('Complex')
      }
     
      console.log("array ",this.arr);
    // this.cookieData();
    }
    
    reset(){      
      console.log(this.complexityArray,"complexity")
    }

    datePicker() {
      let today = new Date();
      let day = today.getDay();
      let dd = this.formatDay(day);
      let month = today.getMonth();
      let mm = this.formatDay(month)
      let year = today.getFullYear()
      this.date = dd+mm+year;
      console.log(this.date)
    }

    formatDay(input: any) {
      return input < 10 ? '0'+input : input;
    }

    cookieData(){
      this.key = "key_for_pricing";
      console.log("key",this.key,"value",JSON.stringify(this.complexityArray));
      
      this.cookie.set(this.key,JSON.stringify(this.complexityArray))
    }

    downloadAsPDF(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let todayDate =  dd + mm +  yyyy;

    let DATA: any = document.getElementById('content');
    var img = new Image();
    img.src = 'data:image/png;base64,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';
        html2canvas(DATA).then((canvas) => {
          let fileWidth = 208;
          let fileHeight = (canvas.height * fileWidth) / canvas.width;
          const FILEURI = canvas.toDataURL('image/png');
          let position = 20;
          let PDF = new jsPDF('p',"mm","a4");
          PDF.addImage(FILEURI, 'PNG', 1.2, position, fileWidth, fileHeight);
          PDF.addImage(img,'PNG',90, 0, 40, 20)
          PDF.save(this.envName+'_'+todayDate+'.pdf');
        });

        let newArray = this.complexityArray.map(function(item){

          return {'name': item}  
    
       })
       
       console.log(newArray,'text file data',this.complexityArray,"complex array")
       this.currentFile = new Angular2Txt(JSON.stringify(newArray), this.envName+ ' '+todayDate);


       //code added from stackoverflow for web storage
//        const accountName =environment.accountName;
//        const containerName =environment.containerName;
//        const key = environment.key;
//        const start = new Date(new Date().getTime() - (15 * 60 * 1000));
//        const end = new Date(new Date().getTime() + (30 * 60 * 1000));
//      const signedpermissions = 'rwdlac';
//        const signedservice = 'b';
//        const signedresourcetype = 'sco';
//        const signedexpiry = end.toISOString().substring(0, end.toISOString().lastIndexOf('.')) + 'Z';
//        const signedProtocol = 'https';
//        const signedversion = '2018-03-28';
//        const StringToSign =
//        accountName+ '\n' +
//        signedpermissions + '\n' +
//        signedservice + '\n' +
//        signedresourcetype + '\n' +
//         '\n' +
//        signedexpiry + '\n' +
//         '\n' +
//        signedProtocol + '\n' +
//  signedversion + '\n';


 
//  let str =CryptoJS.HmacSHA256(StringToSign,CryptoJS.enc.Base64.parse(key));
//  let sig = CryptoJS.enc.Base64.stringify(str);
//  /const crypto =require('crypto')
 //const sig = crypto.createHmac('sha256', Buffer.from(key, 'base64')).update(StringToSign, 'utf8').digest('base64');
//const sasToken =`?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2022-09-14T22:36:18Z&st=2022-09-14T14:36:18Z&spr=https,http&sig=gECKFyHPO149nudpUGhAU1G0cehQLCe4s1AN0d95K4k%3D`;
//const containerName=environment.containerName;


// const pipeline =newPipeline (new AnonymousCredential(),{
//   retryOptions: { maxTries: 4 }, // Retry options
//   userAgentOptions: { userAgentPrefix: "AdvancedSample V1.0.0" }, // Customized telemetry string
//   keepAliveOptions: {
//       // Keep alive is enabled by default, disable keep alive by setting false
//       enable: false
//   }
//   });

//   const blobServiceClient =new BlobServiceClient(`https://${accountName}.blob.core.windows.net?${sasToken}`,
//                                                    pipeline  )
//   const containerClient =blobServiceClient.getContainerClient(containerName)
//   if(!containerClient.exists()){
//   console.log("the container does not exit")
//   await containerClient.create()
// }
// const client = containerClient.getBlockBlobClient(this.currentFile.name)
// const response = await client.uploadBrowserData(this.currentFile,{
//       blockSize: 4 * 1024 * 1024, // 4MB block size
//       concurrency: 20, // 20 concurrency
//       onProgress: (ev) => console.log(ev),
//       blobHTTPHeaders :{blobContentType:this.currentFile.type}
//       })
// console.log(response._response.status)




       this.complexityArray = []
  }
    
}