import { Component, OnInit } from '@angular/core';
import { DeveloperService } from './developer_service.service';
import { Developer } from './developer';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Mistake } from './mistake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '26.08.22';
  public developers!:Developer[];
  ROOT_URL='http://localhost:8080/developers';

  constructor(private developerService:DeveloperService){}
  ngOnInit(): void {
   this.getDevelopers();
  }
  public getDevelopers() :void{

    this.developerService.getAllDevelopers().subscribe(
      (response:Developer[])=>{this.developers=response},
      (error :HttpErrorResponse)=>{alert(error.message)}
    )

  } 
 
  }
  


