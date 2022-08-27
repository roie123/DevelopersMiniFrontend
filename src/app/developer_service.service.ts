import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Developer } from './developer';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getAllDevelopers() :Observable<Developer[]>{
    return this.http.get<Developer[]>(`${this.url}`);
  }
// public getEmployees() : Observable<Employee[]>{
  // return this.Http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
// }
}
