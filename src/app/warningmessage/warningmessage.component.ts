import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warningmessage',
  // templateUrl: './warningmessage.component.html',
  template: `
  <p>warningmessage works!</p>
  `;
  styleUrls: ['./warningmessage.component.css']
})
export class WarningmessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
