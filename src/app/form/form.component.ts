import { Component, OnInit } from '@angular/core';
import { containsElement } from '@angular/animations/browser/src/render/shared';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public author = '';
  public quote = '';

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {}

  public post() {
    const quote = {
      author: this.author,
      text: this.quote,
      createdAt: Date.now(),
      likes: 0
    };
    this.quotesService.addQuote(quote);
  }

  public clear() {
    this.author = '';
    this.quote = '';
  }
}
