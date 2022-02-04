import { Component, OnInit } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {NewsService} from "../../Services/news.service";
import {Newspaper} from "../../Interfaces/newspaper";

@Component({
  selector: 'app-delete-prompt',
  templateUrl: './delete-prompt.component.html',
  styleUrls: ['./delete-prompt.component.css']
})
export class DeletePromptComponent implements OnInit {

  private _delNews: Newspaper = new class implements Newspaper {
    active = true;
    content = 'Error';
    date = 'Error';
    id = 0;
    title = 'Error';
  }

  constructor(
    private newsService: NewsService,
    public modalRef: MdbModalRef<DeletePromptComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.newsService.delNews)
    this._delNews = this.newsService.delNews;
  }

  delete() {
    this.newsService.getNewspapers().subscribe(
      () => this.newsService.newsList = this.newsService.newsList.filter(
        (n = this._delNews) => n.id! === n.id))
    this.newsService.deleteNewspaper(this._delNews)
    this.modalRef.close()
  }

}
