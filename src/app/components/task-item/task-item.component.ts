import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EMPTY_TASK, Task} from "../../models/Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = EMPTY_TASK
  @Output() btnOnDelete = new EventEmitter<void>()
  @Output() btnOnToggle = new EventEmitter<void>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleReminder() {
    this.btnOnToggle.emit()
  }

  onDelete() {
    this.btnOnDelete.emit()
  }
}
