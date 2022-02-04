import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule} from "@angular/cdk/overlay";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule, RouterOutlet} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditMaskComponent } from './Components/edit-mask/edit-mask.component';
import { CreateMaskComponent } from './Components/create-mask/create-mask.component';
import {DatePipe} from "@angular/common";
import {MdbModalService} from "mdb-angular-ui-kit/modal";
import { NewsListComponent } from './Components/news-list/news-list.component';
import {HttpClientModule} from "@angular/common/http";
import { NewsItemComponent } from './Components/news-item/news-item.component';
import { DeletePromptComponent } from './Components/delete-prompt/delete-prompt.component';
import { NewsPageComponent } from './Components/news-page/news-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { BodyComponent } from './Components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    EditMaskComponent,
    CreateMaskComponent,
    NewsListComponent,
    NewsItemComponent,
    DeletePromptComponent,
    NewsPageComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    DatePipe,
    MdbModalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
