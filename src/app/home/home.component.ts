import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inputA:number;
  inputB:number;
  result:number;
  sub:any='-';
  add:any='+';
  mul:any='*';
  div:any='/';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:keypress',['$event'])
  keycode($event){
    console.log($event);
    if($event.key === this.sub){
      this.subtract();
    }
    if($event.key === this.add){
      this.addition();
    }
    if($event.key === this.mul){
      this.multiply();
    }
    if($event.key === this.div){
      this.divide();
    }
  }

  subtract(){
    this.result = this.inputA - this.inputB;
  }
  addition(){
    this.result = this.inputA + this.inputB;
  }
  multiply(){
    this.result = this.inputA * this.inputB;
  }
  divide(){
    this.result = this.inputA / this.inputB;
  }
}
