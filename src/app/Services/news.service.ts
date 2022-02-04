import { Injectable } from '@angular/core';
import {Newspaper} from "../Interfaces/newspaper";
import {CreateMaskComponent} from "../Components/create-mask/create-mask.component";
import {NewsListComponent} from "../Components/news-list/news-list.component";
import {BehaviorSubject, Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'http://localhost:5000/news'

  private _newsList: Newspaper[] = [];
  private _editNews: Newspaper = new class implements Newspaper {
    active = true;
    content = 'Error';
    date = 'Error';
    id = 0;
    title = 'Error';
  }
  private _delNews: Newspaper = new class implements Newspaper {
    active = true;
    content = 'Error';
    date = 'Error';
    id = 0;
    title = 'Error';
  }
  private _article: Newspaper = new class implements Newspaper {
    active = true;
    content = 'Error';
    date = 'Error';
    id = 0;
    title = 'Error';
  }

  constructor(
    private http:HttpClient
  ) {}

  getNewspapers(): Observable<Newspaper[]> {
    return this.http.get<Newspaper[]>(this.apiUrl);
  }

  addNewspaper(news: Newspaper):Observable<Newspaper> {
    return this.http.post<Newspaper>(this.apiUrl, news, httpOptions)
  }

  updateNewspaper(news: Newspaper):Observable<Newspaper> {
    const url = `${this.apiUrl}/${news.id}`;
    return this.http.put<Newspaper>(url, news, httpOptions)
  }

  deleteNewspaper(news: Newspaper): Observable<Newspaper> {
    console.log(news.id)
    const url = `${this.apiUrl}/${news.id}`;
    return this.http.delete<Newspaper>(url, httpOptions)
  }

  get newsList(): Newspaper[] {
    return this._newsList;
  }

  set newsList(value: Newspaper[]) {
    this._newsList = value;
  }

  get editNews(): Newspaper {
    return this._editNews;
  }

  set editNews(value: Newspaper) {
    this._editNews = value;
  }


  get delNews(): Newspaper {
    return this._delNews;
  }

  set delNews(value: Newspaper) {
    this._delNews = value;
  }


  get article(): Newspaper {
    return this._article;
  }

  set article(value: Newspaper) {
    this._article = value;
  }
}
