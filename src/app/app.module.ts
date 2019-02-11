import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { StudentFilterComponent } from './component/student-filter/student-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './component/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentFilterComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'', redirectTo: 'home', pathMatch: 'full' },
      { path:'home', component:StudentComponent },
      { path: 'student-list', component:StudentFilterComponent},
    ])



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
