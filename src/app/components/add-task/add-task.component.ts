import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../../models/Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = ''
  day: string = ''
  reminder: boolean = false
  @Output() btnOnSave = new EventEmitter<Task>()
  show = false
  private subscription: Subscription

  constructor(private uiService: UiService) {
    this.subscription = uiService.onShowSaveTaskToggle().subscribe(value => this.show = value)
    this.show = uiService.showSaveTaskForm()
  }

  ngOnInit(): void {
  }

  saveTask() {
    if (!this.text) {
      alert('Please provide a text')
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    } as Task

    this.btnOnSave.emit(newTask)

    this.text = ''
    this.day = ''
    this.reminder = false
  }
}
