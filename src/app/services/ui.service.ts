import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showSaveTask = false
  private subject = new Subject<any>()

  constructor() {
  }

  toggleShowSaveTask() {
    this.showSaveTask = !this.showSaveTask
    this.subject.next(this.showSaveTask)
  }

  onShowSaveTaskToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
