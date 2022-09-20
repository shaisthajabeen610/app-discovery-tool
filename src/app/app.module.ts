import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SheetComponent } from './sheet/sheet.component';
import { FinalValuesComponent } from './final-values/final-values.component';
import { PassDataService } from './pass-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SheetComponent,
    FinalValuesComponent,
  ],
  imports: [
    NgWizardModule.forRoot(ngWizardConfig),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
 
  providers: [PassDataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
