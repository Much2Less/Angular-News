import {Component, Input, OnInit} from '@angular/core';
import {Newspaper} from "../../Interfaces/newspaper";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {EditMaskComponent} from "../edit-mask/edit-mask.component";
import {NewsService} from "../../Services/news.service";
import {DeletePromptComponent} from "../delete-prompt/delete-prompt.component";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() news!: Newspaper;

  modalRef: MdbModalRef<EditMaskComponent> | null = null;

  constructor(
    private newsService: NewsService,
    private modalService: MdbModalService
  ) { }

  ngOnInit(): void {
  }

  openModalEdit(news: Newspaper) {
    this.newsService.editNews = news;
    this.modalRef = this.modalService.open(EditMaskComponent, {
      modalClass: 'modal-dialog-centered, modal-lg'
    });
  }

  openModalDelete(news: Newspaper) {
    this.newsService.delNews = news;
    this.modalRef = this.modalService.open(DeletePromptComponent, {
      modalClass: 'modal-dialog-centered, modal-lg'
    });
  }

  setArticle(news: Newspaper) {
    this.newsService.article = news;
  }
}
