import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Newspaper} from "../../Interfaces/newspaper";

@Component({
  selector: 'app-create-mask',
  templateUrl: './create-mask.component.html',
  styleUrls: ['./create-mask.component.css']
})
export class CreateMaskComponent implements OnInit {

  timeChecked = true;

  title: any;
  content: any;


  constructor(
    public datePipe: DatePipe,
) {}

  ngOnInit(): void {
  }

  submit()  {

    let currentDateTime = this.datePipe.transform((new Date), `MM/dd/yyyy h:mm:ss`)
    let newspaper:Newspaper = {
      title:this.title,
      content:this.content,
      date:currentDateTime,
      active:true
    }

  }
}
