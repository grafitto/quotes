import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private quotes: any[] = [];
  private observable: Observable<any[]>;
  private observer: Observer<any[]>;

  constructor() {
    this.observable = new Observable(observer => this.observer = observer);
  }
  public getQuotes() {
    return this.observable;
  }
  public addQuote(quote: any) {
    this.quotes.push(quote);
    this.observer.next(this.quotes);
  }

  public addFake() {
    this.quotes.push({
      likes: 0,
      text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      author: 'Nelson Mandela',
      createdAt: Date.now() + 53
    });

    this.quotes.push({
      likes: 0,
      text: 'The way to get started is to quit talking and begin doing.',
      author: 'Walt Disney',
      createdAt: Date.now() + 53
    });

    this.quotes.push({
      likes: 0,
      // tslint:disable-next-line: max-line-length
      text: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
      author: 'Steve Jobs',
      createdAt: Date.now() + 53
    });

    this.quotes.push({
      likes: 0,
      // tslint:disable-next-line: max-line-length
      text: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
      author: 'James Cameron',
      createdAt: Date.now() + 53
    });
    this.observer.next(this.quotes);
  }

  public incrementLike(quoteToLike: any) {
    this.quotes = this.quotes.map((quote: any) => {
      if (quote === quoteToLike) {
        quote.likes++;
      }
      return quote;
    });
    this.observer.next(this.quotes);
  }
}
