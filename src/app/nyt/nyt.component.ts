import { Component, OnInit } from '@angular/core';
import { MaterialsModule } from '../materials/materials.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nyt',
  templateUrl: './nyt.component.html',
  styleUrls: ['./nyt.component.scss']
})
export class NYTComponent implements OnInit {

  Now_date = new Date()
  alertForUpdate: boolean = false
  constructor(private router: Router) { }


  totalitems= [
    {id: 1, text: 'Books'}, 
    {id: 1, text: 'Articles'}, 
    {id: 1, text: 'Stories'}, 

  ]





  ngOnInit(): void {
  }

  TypeOfView(type){
    console.log(1)
    let typeOfView = type.text

    if(typeOfView == 'Books'){
      this.router.navigate(['items/category'])
    }
    if(typeOfView == 'Articles'){
      this.router.navigate(['articles/articleslist'])
    }
    if(typeOfView == 'Stories'){
      this.alertForUpdate = true
      setTimeout(()=>{                         
        this.alertForUpdate = false;
    }, 3000);
      
    }

  }



  
}
