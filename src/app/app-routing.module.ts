import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './pages/comic/comic.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';


const routes: Routes = [
  { path: '', component: PersonajesComponent },
  { path: 'comic', component: ComicComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }