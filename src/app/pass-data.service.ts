import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService{
  homeData = new Subject<any>();
  sheetData = new Subject<any>();

  constructor() { }

  homeDataChanges(hdata: any) {
    this.homeData.next(hdata)
    console.log(hdata,'home data from service');
  }

  sheetDataChanges(sdata: any) {
    this.sheetData.next(sdata)
    console.log(sdata,'sheet data from service');
  }


}
