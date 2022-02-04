import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NewsPageComponent} from "./Components/news-page/news-page.component";
import {AppComponent} from "./app.component";
import {NewsListComponent} from "./Components/news-list/news-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: NewsListComponent},
  { path: 'news-page', component: NewsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
