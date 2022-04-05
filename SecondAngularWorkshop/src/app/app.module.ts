import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoresListComponent } from './components/chores-list/chores-list.component';
import { FavPhotosComponent } from './components/fav-photos/fav-photos.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';



@NgModule({
  declarations: [
    AppComponent,
    ChoresListComponent,
    FavPhotosComponent,
    MovieListComponent,
    HeaderComponent,
    FooterComponent,
    CompletedTaskComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
