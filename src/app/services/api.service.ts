import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL ="https://3713-196-203-237-137.eu.ngrok.io/"
  auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VyTmFtZSI6InBoYXJtYWN5MiIsImVtYWlsIjoicGhhcm1hY3kyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEV6Y0RyZHpWZ3JPeG9NUUZwa29VRnVmN1guYmxySW40V3c1QWlmLjd3WDRYYXZzWXFWVi4yIiwicm9sZSI6InBoYXJtYWN5IiwicGhvdG8iOiJodHRwczovL2lkYXJhdHkuczMudXMtd2VzdC0wMDAuYmFja2JsYXplYjIuY29tL2xvZ29zL2RpcmVjdGlvbi1kZS1sYS1waGFybWFjaWUtZXQtZHUtbWVkaWNhbWVudC5wbmcifSwiaWF0IjoxNjY0NDk1NDI1fQ.-0CTQHxpb-JCjMRemUk4Ph4012Hm2eZOdU1l-PwFfmw"
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
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
    return this.http.get(this.baseURL+'reclamation/reclamations',{headers})
  }
}
