import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { ImageSearchComponent } from './image-search/image-search.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [

  {path:'Image',component : ImageSearchComponent}, ]

@NgModule({
  declarations: [
    AppComponent,ImageSearchComponent

  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(routes),
    FormsModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
