import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable,retry,Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportDataService {

  constructor(private http : HttpClient) { 
   // super(http, 'reports');
  }
  
  sendReportData(envName:any, complexity:any):Observable<any>{
    const formData: FormData = new FormData();

     formData.append('envName',envName);
     formData.append('archComplexity', complexity);
     return this.http.post("",formData).pipe(retry(2),catchError(this.handleError));
   }
 handleError(error: HttpErrorResponse){
 console.log(error.message);
 return throwError(error);
 }
    // return this.withResource("").post(parameters)

  }
