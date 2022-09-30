import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VariablesGlobales } from '../shared/VariablesGlobales';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL ='https://d0a6-196-203-237-137.eu.ngrok.io/'
  //auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJ1c2VyTmFtZSI6Indob2xlc2FsZXIxIiwiZW1haWwiOiJ3aG9sZXNhbGVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDJuUXdkNTFkYTNLbEVXalRqSVZjWHU0bHRhNVhvNVd2RWdhZy93NGpsNE1rY3FQNWN4Lm1pIiwicm9sZSI6Indob2xlc2FsZXIiLCJwaG90byI6Imh0dHBzOi8vaWRhcmF0eS5zMy51cy13ZXN0LTAwMC5iYWNrYmxhemViMi5jb20vbG9nb3MvZGlyZWN0aW9uLWRlLWxhLXBoYXJtYWNpZS1ldC1kdS1tZWRpY2FtZW50LnBuZyJ9LCJpYXQiOjE2NjQ1Mjg4Mzl9.u28SUBba8oStqjdpA7YcxyMTEglvjiKUohbZY9uG6A8"
  auth_token = localStorage.getItem('token')
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
    return this.http.post(this.baseURL+'reclamation/reclamations',{},{headers})
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

  public vote(body:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
    return this.http.post<any>(this.baseURL+'reclamation/respond',body,{headers})
  }
  public getAlert():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth_token}`
    });
    return this.http.post(this.baseURL+"alert/alerts",{},{headers})
  }
}
