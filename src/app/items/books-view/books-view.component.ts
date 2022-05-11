import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { ParamMap, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss']
})
export class BooksViewComponent implements OnInit {

  constructor(private service: ItemsService, private route: Router, private activateroute: ActivatedRoute, private fb: FormBuilder,private datepipe: DatePipe) { }


  BookCategorySearch: any
  CategoryName: any 
  generalData: any
  booksList:any 




  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((params: ParamMap) =>{
      let categoryCall: any = params.get('data')
      console.log(" category call ", categoryCall)
      this.CategoryName = categoryCall
    })

    this.BookCategorySearch = this.fb.group({
      date: new Date(),
      category: this.CategoryName
    })


    this.pickingDate()


  }

  pickingDate(){
    console.log("date")

    let searchvalue = this.BookCategorySearch.value
    let datepipeset = this.datepipe.transform(searchvalue.date, 'yyyy-MM-dd')
    let searchparameters = {
      category: searchvalue.category,
      date: datepipeset
    }
    console.log("searchvalue", searchparameters)
    this.service.getBooksBasedOnCategory(searchparameters)
    .subscribe(results =>{
      this.generalData = results 
      let data = results.results["books"]
      this.booksList = data
      console.log("books based on Search", this.booksList)
    })
  }

  bookBuyListSuppliers: any
  buylistTotal(bookBuyList){
    console.log("bookBuyList", bookBuyList)
    this.bookBuyListSuppliers = bookBuyList["buy_links"]
    

  }



  backnavigate(){
    this.route.navigate(['items/category'])
  }


}
