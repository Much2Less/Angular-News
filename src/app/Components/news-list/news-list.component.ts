import {Component, Inject, Input, OnInit} from '@angular/core';
import { Newspaper } from "../../Interfaces/newspaper";
import {NewsService} from "../../Services/news.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newspapers:Newspaper[] = []

  constructor(
    private newsService: NewsService
  ) {
  }

  ngOnInit(): void {
    this.newsService.getNewspapers().subscribe((news) => this.newspapers = news);
  }

}
