import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Newspaper} from "../../Interfaces/newspaper";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {NewsService} from "../../Services/news.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-mask',
  templateUrl: './create-mask.component.html',
  styleUrls: ['./create-mask.component.css']
})
export class CreateMaskComponent implements OnInit {

  @Output() onAddNews: EventEmitter<Newspaper> = new EventEmitter();

  timeChecked = true;
  title: string = '';
  content: string = '';



  constructor(
    public datePipe: DatePipe,
    public modalRef: MdbModalRef<CreateMaskComponent>,
    private newsService: NewsService,
) {}

  ngOnInit(): void {
  }

  onSubmit() {

    let currentDateTime = this.datePipe.transform((new Date), `MM/dd/yyyy h:mm:ss`)
    let newNewspaper:Newspaper = {
      title:this.title,
      content:this.content,
      date:currentDateTime,
      active:true
    }

    this.modalRef.close()
    this.newsService.addNewspaper(newNewspaper).subscribe((newNewspaper) => this.newsService.newsList.push(newNewspaper))

    //this.onAddNews.emit(newNewspaper);

  }
}
