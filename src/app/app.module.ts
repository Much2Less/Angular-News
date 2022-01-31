import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule} from "@angular/cdk/overlay";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateButtonComponent } from './Components/create-button/create-button.component';
import { EditButtonComponent } from './Components/edit-button/edit-button.component';
import { EditMaskComponent } from './Components/edit-mask/edit-mask.component';
import { DeleteButtonComponent } from './Components/delete-button/delete-button.component';
import { CreateMaskComponent } from './Components/create-mask/create-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateButtonComponent,
    EditButtonComponent,
    EditMaskComponent,
    DeleteButtonComponent,
    CreateMaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
