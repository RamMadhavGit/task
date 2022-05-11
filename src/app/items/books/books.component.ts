import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private service: ItemsService, private route: Router) { }
  generalDetails: any
  bookList: any


  ngOnInit(): void {
    this.getBookNmaeList()
  }


  getBookNmaeList(){
    this.service.getBooksList()
    .subscribe(results =>{
      this.generalDetails = results
      console.log("generalDetails", this.generalDetails)
      this.bookList = results.results["lists"]
      

      console.log(results)
    })
  }

  chooseCategory(type){
    console.log("type of choosen", type.list_name_encoded)
    let typeOfChoosenCategory =  type.list_name_encoded
    let data = {
      type_encoded : type.list_name_encoded,
      name : type.display_name
    }
    this.route.navigate(['items/books', data.type_encoded])



  }


  homenavigate(){
    this.route.navigate(['NYT'])
  }

}
