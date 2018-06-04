import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[successmessage]',
  templateUrl: './successmessage.component.html',
  // styleUrls: ['./successmessage.component.css']
  styles: [`
   h3{
     color: green;
   }
  `]
})
export class SuccessmessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
