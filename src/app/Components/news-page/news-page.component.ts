import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../Services/news.service";
import {Newspaper} from "../../Interfaces/newspaper";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  news:Newspaper = new class implements Newspaper {
    active = true;
    content = '';
    date = '';
    id = 0;
    title = '';
  }

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.news = this.newsService.article;
  }

}
