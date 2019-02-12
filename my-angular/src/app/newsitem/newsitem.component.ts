import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.scss']
})
export class NewsitemComponent implements OnInit {
  @Input() newsList:any;

  constructor() { }

  handler(event: string) {
    console.log(event, 'event');
  }

  ngOnInit() {
  }

}
