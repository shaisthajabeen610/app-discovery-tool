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

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { getDatabase } from "firebase/database";


const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://practice-demo-b0f52-default-rtdb.asia-southeast1.firebasedatabase.app/",
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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
   ],
 
  providers: [PassDataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
