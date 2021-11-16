import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { ComicComponent } from './pages/comic/comic.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
// import { PaginationComponent } from './pages/pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './pages/details/details.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { StoriesComponent } from './pages/stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    ComicComponent,
    DetailsComponent,
    ComicsComponent,
    StoriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
