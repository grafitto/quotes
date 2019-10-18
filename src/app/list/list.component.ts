import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private quotes: any[];
  constructor(private quotesService: QuotesService) { }

  get mostCurrentQuote() {
    return this.quotes.sort((first, second) => second.createdAt - first.createdAt)[0];
  }

  get sortedByLikesExcludingCurrentQuote() {
    // const sortedByTime = this.quotes.sort((first, second) => second.createdAt - first.createdAt)
    // sortedByTime.pop();
    return this.quotes
      .filter(quote => quote !== this.mostCurrentQuote)
      .sort((first, second) => second.likes - first.likes);
  }

  ngOnInit() {
    const quotesObservable = this.quotesService.getQuotes();
    quotesObservable.subscribe(quotes => this.quotes = quotes);
    this.quotesService.addFake();
  }
}
