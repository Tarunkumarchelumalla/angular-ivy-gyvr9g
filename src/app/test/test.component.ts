import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'this anme from testcomponent';
  public gg = '';

  helu = true; // parameter for class binding
  constructor() {}

  ngOnInit() {}

  welcomeuser() {
    return 'welcome';
  }
  eventbinding(val) {
    console.log(' welcome to ngrok' + ' ' + val);
  }
}
