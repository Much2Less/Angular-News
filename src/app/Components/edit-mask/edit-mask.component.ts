import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Newspaper} from "../../Interfaces/newspaper";
import {NewsService} from "../../Services/news.service";
import {Element} from "@angular/compiler";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-edit-mask',
  templateUrl: './edit-mask.component.html',
  styleUrls: ['./edit-mask.component.css']
})
export class EditMaskComponent implements OnInit {

  @ViewChild('title') titleElement: ElementRef;
  @ViewChild('content') contentElement: ElementRef;

  public _editNews: Newspaper = new class implements Newspaper {
    active = true;
    content = 'Error';
    date = 'Error';
    id = 0;
    title = 'Error';
  }

  constructor(
    private newsService: NewsService,
    public modalRef: MdbModalRef<EditMaskComponent>,
    titleElement: ElementRef,
    contentElement: ElementRef
) {
    this.titleElement=titleElement;
    this.contentElement=contentElement;
  }

  ngOnInit(): void {
    this._editNews = this.newsService.editNews;
  }

  get editNews(): Newspaper {
    return this._editNews;
  }

  set editNews(value: Newspaper) {
    this._editNews = value;
  }

  onSubmit() {
    this._editNews.title = this.titleElement.nativeElement.value;
    this._editNews.content = this.contentElement.nativeElement.value;

    this.modalRef.close();
    this.newsService.updateNewspaper(this._editNews);
  }
}
