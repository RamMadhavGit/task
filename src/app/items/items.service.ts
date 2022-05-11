import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'; 
const url = environment.nytapiurl;
const apikey = environment.apikey;

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  constructor( private http: HttpClient  ) { }

  public getBooksList(): Observable<any>{
    // return this.http.get<any>(url+'svc/books/v3/lists/names.json?api-key='+apikey)
    return this.http.get<any>(url+'svc/books/v3/lists/full-overview.json?api-key='+apikey)

  }


  public getBooksBasedOnCategory(data): Observable<any>{
    let date = data.date 
    let category = data.category
    return this.http.get<any>(url+'svc/books/v3/lists/'+date+'/'+category+'?api-key='+apikey)

  }

  // https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=jJrrl5yqv5fy8oUHFbehHYWYjlJZ2LZ2



}


