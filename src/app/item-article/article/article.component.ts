import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  selectedArticleValue: any
  ArticleListShow: any
 

  ArticleList= [
    {id: 1, text: 'arts'}, 
    {id: 1, text: 'home'}, 
    {id: 1, text: 'science'}, 
    {id: 1, text: 'us'}, 
    {id: 1, text: 'world'}, 
  ]

  constructor(private service: ArticleService, private route: Router) { }


  ngOnInit(): void {
  }


  getArticles(){
    let data = this.selectedArticleValue
    console.log("datadatadata article", data)
    this.service.getBooksList(data)
    .subscribe(results =>{
      let data = results["results"] 
      this.ArticleListShow = data
      console.log("article list api", results)
    })
  }



  homenavigate(){
    this.route.navigate(['NYT'])
  }
























}





