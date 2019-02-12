import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loadmore',
  templateUrl: './loadmore.component.html',
  styleUrls: ['./loadmore.component.scss']
})
export class LoadmoreComponent implements OnInit {
  @Output() outputData: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  loadMore() {
    this.outputData.emit('Loading...');
  }
}
