import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseEntryListComponent } from './expense-entry-list2/expense-entry-list2.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,

    ExpenseEntryListComponent,



 ],
  imports: [
    BrowserModule,
      HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
