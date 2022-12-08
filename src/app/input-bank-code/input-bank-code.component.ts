import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-bank-code',
  templateUrl: './input-bank-code.component.html',
  styleUrls: ['./input-bank-code.component.scss'],
})
export class InputBankCodeComponent implements OnInit {
  public arr = (new Array(10)).fill(0).map( (t, i) => i);
  public innerValue = '';

  constructor() { }

  ngOnInit() {
    this.arr = this.shuffle(this.arr);
  }

  private shuffle(arr) {
    arr.sort( (el1, el2) => Math.random() - 0.5 );
    return arr;
  }
  public update(i: string) {
    this.innerValue += i;
  }

  public reset() {
    this.innerValue = '';
  }

}