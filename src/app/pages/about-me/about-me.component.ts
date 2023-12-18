import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit{
  
  constructor(private http: HttpClient){}

  rotate = 'rotate(90deg)'
  
  dados: any[] = []

  ngOnInit(){
    this.http.get('./assets/dados.model.json').subscribe({
      next: (data: any)=>{
        this.dados = data.profile
      },
      error: (error: any)=>{
        console.log(error)
      }
    })
  }
  


}
