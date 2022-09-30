import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VariablesGlobales } from '../shared/VariablesGlobales';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL ='https://79a0-196-203-237-137.eu.ngrok.io/'
  auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjowLCJ1c2VyTmFtZSI6ImRwbSIsImVtYWlsIjoiZHBtQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJENVMDEyV2lhajFWdjlPcXVhMFdWTS4xTkovcGxvSGRhcGI3S0lIWmUzZUUuY1N2Y3Q3MmZLIiwicm9sZSI6ImFkbWluIiwicGhvdG8iOiJodHRwczovL2lkYXJhdHkuczMudXMtd2VzdC0wMDAuYmFja2JsYXplYjIuY29tL2xvZ29zL2RpcmVjdGlvbi1kZS1sYS1waGFybWFjaWUtZXQtZHUtbWVkaWNhbWVudC5wbmcifSwiaWF0IjoxNjY0NTExNzAzfQ.6FuFyoHPMyoIHXWhq6MnMNzOx9zF1luhRj0mJYnVVEs"
  constructor(private http:HttpClient) { }

  public postReclamation(med:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
    const body = {"drug":med}

    return this.http.post<any>(this.baseURL+'reclamation/add-reclamation',body,{headers})
  }

  public getReclamation():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth_token}`
    });
    return this.http.get(this.baseURL+'reclamation/reclamations',{headers})
  }

  public postAlert(alert:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
    const body = alert

    return this.http.post<any>(this.baseURL+'alert/send-alert',body,{headers})
  }
  public signIn(user:any):Observable<any>{
    const body =user
    return this.http.post(this.baseURL+'auth/signin',body)
  }
}
