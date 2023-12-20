import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit{

  constructor(private http: HttpClient){

  }

  jsonUrl = "./assets/portfolio.json"

  ngOnInit(): void {
    this.http.get(`${this.jsonUrl}`).subscribe((respsonse: any)=>{
      this.portfolioList = respsonse.portfolio
      console.log(this.portfolioList)
    })
  }

  portfolioList: any[] = []



}
