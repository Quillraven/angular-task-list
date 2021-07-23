import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = 'primary'
  @Input() text: string = ''
  @Output() btnOnClick = new EventEmitter<void>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Add')
    this.btnOnClick.emit()
  }
}
