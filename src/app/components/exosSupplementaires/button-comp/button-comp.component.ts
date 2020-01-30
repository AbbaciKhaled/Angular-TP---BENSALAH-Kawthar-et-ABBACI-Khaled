import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-comp',
  templateUrl: './button-comp.component.html',
  styleUrls: ['./button-comp.component.scss']
})
export class ButtonCompComponent implements OnInit {


  @Input() title: string;
  @Input() icon: string;


  @Output() notifyText = new EventEmitter<string>();

  constructor() { }

  set() {
    this.notifyText.emit(this.title);
    
  }

  ngOnInit() {
  }

}
