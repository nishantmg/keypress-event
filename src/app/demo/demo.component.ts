import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  count: number = 0;
  inc: any = '+';
  dec: any = '-';

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:keydown', ['$event'])
  keycode($event) {
    console.log($event);
    if ($event.key == this.inc) {
      this.increment();
    }
    if ($event.key == this.dec) {
      this.decrement();
    }
  }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
