import {Time} from "@angular/common";

export interface Newspaper {
  title: string;
  content: string;
  date: Date;
  time: Time;
  active: boolean;
}
