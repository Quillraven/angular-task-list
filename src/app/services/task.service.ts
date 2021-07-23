import {Injectable} from '@angular/core';
import {Task} from "../models/Task";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
const API_URL = 'http://localhost:5000/tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(API_URL)
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${API_URL}/${task.id}`)
  }

  toggleReminder(task: Task): Observable<Task> {
    task.reminder = !task.reminder
    return this.http.put<Task>(`${API_URL}/${task.id}`, task, HTTP_OPTIONS)
  }

  saveTask(task: Task): Observable<Task> {
    return this.http.post<Task>(API_URL, task, HTTP_OPTIONS)
  }
}
