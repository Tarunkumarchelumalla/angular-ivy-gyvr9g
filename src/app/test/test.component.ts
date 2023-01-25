import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input('parentdata') msgofparent; // receving props like in react from parent
  @Output() public childevent = new EventEmitter();

  public name = 'this anme from testcomponent';
  public gg = '';
  public color = 'black';
  show = false;
  x = ['1', '2', '3', '4']; // this array can be used for list rendering
  helu = true; // parameter for class binding

  constructor() {}

  ngOnInit() {}

  welcomeuser() {
    return 'welcome';
  }
  eventbinding(val) {
    console.log(' welcome to ngrok' + ' ' + val);
    this.show = !this.show;
  }
  fireevent() {
    this.childevent.emit('helo from child to parent');
  }
}
