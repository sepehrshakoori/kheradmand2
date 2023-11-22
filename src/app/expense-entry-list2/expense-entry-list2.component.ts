import { Component, OnInit } from '@angular/core';
import { ExpenseEntryList2Component } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
   selector: 'app-expense-entry-list',
   templateUrl: './expense-entry-list2.component.html',
   styleUrls: ['./expense-entry-list2.component.css'],
   
})
export class ExpenseEntryListComponent implements OnInit {
   title!: string;
   expenseEntries!: ExpenseEntryList2Component[];
   constructor( private restService : ExpenseEntryService ) { }

   ngOnInit() {
      
      this.title = "Expense Entry List";

      this.getExpenseItems();
   }

   getExpenseItems() {
      this.restService.getExpenseEntries()
      .subscribe( data => this.expenseEntries = data );
   }
}