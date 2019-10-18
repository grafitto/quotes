import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: any;
  @Input() color = '#3CDAFF';
  @ViewChild('quoteBlock') quoteBlock: ElementRef;

  constructor(private quotesService: QuotesService) { }

  get convertedTime() {
    return moment(new Date(this.quote.createdAt), 'YYYYMMDD').fromNow();
  }

  public like() {
    this.quotesService.incrementLike(this.quote);
  }

  ngOnInit() {
    this.quoteBlock.nativeElement.style.backgroundColor = this.color;
  }
}
