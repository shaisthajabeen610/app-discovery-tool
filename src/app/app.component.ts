import { Component, OnInit } from '@angular/core';

import 
{ 
  NgWizardConfig, 
  THEME, StepChangedArgs, 
  NgWizardService, STEP_STATE, 
  StepValidationArgs 
} 
from 'ng-wizard';

import { of } from 'rxjs';

import { PassDataService } from './pass-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
 
  homeData: any=[];
  appVal: string="";
  appCloud: string="";
  appName: string="";

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      // toolbarExtraButtons: [
      //   { text: 'Finish', 
      //     class: 'btn btn-info', 
      //     event: () => { alert("Finished!!!"); } 
      //   }
      // ],
    }
  };

  constructor(private ngWizardService: NgWizardService, 
    private passDataService: PassDataService) {
  }

  ngOnInit() {
    this.homeDataReceiver();
  }

  homeDataReceiver() {
    this.passDataService.homeData.subscribe((data) => {
      this.homeData = data;
      // console.log("home data in the App C",this.homeData);
      this.appVal = this.homeData[0];
      this.appCloud = this.homeData[1];
      this.appName = this.homeData[2]
    })
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
    console.log(event,'next step event')
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step.index,'step args');
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
}


