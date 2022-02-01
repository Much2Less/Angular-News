import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule} from "@angular/cdk/overlay";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditMaskComponent } from './Components/edit-mask/edit-mask.component';
import { CreateMaskComponent } from './Components/create-mask/create-mask.component';
import {DatePipe} from "@angular/common";
import { NewslistComponent } from './Components/newslist/newslist.component';

@NgModule({
  declarations: [
    AppComponent,
    EditMaskComponent,
    CreateMaskComponent,
    NewslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OverlayModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
