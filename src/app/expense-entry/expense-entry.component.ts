import { Component, OnInit } from '@angular/core'; @Component({ 
  selector: 'app-expense-entry', 
  templateUrl: './expense-entry.component.html', styleUrls: ['./expense-entry.component.css'] 
}) 
export class ExpenseEntryComponent implements OnInit {
  title: string='title';
  expenseEntry!: ExpenseEntry; 
  constructor() { } 
  ngOnInit() { 
     this.title = "Expense Entry" 
     
  } 
}

export interface ExpenseEntry { 
   id: number; 
   item: string; 
   amount: number; 
   category: string; 
   location: string; 
   spendOn: Date; 
   createdOn: Date; 
}