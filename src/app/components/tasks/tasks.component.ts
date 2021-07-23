import {Component, OnInit} from '@angular/core';
import {Task} from "../../models/Task";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Array<Task> = []

  constructor(private service: TaskService) {
  }

  ngOnInit(): void {
    this.service.getTasks()
      .subscribe(value => this.tasks = value)
  }

  deleteTask(task: Task) {
    this.service.deleteTask(task)
      .subscribe(_ => this.tasks = this.tasks.filter(it => it.id !== task.id))
  }

  toggleReminder(task: Task) {
    this.service.toggleReminder(task)
      .subscribe()
  }

  saveTask(task: Task) {
    this.service.saveTask(task)
      .subscribe((value) => this.tasks.push(value))
  }
}
