import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'; 

const url = environment.nytapiurl;
const apikey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {




//   https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey

constructor( private http: HttpClient  ) { }

  public getBooksList(type): Observable<any>{

    return this.http.get<any>(url+'svc/topstories/v2/'+type+'.json?api-key='+apikey)

  }





















}
