export class Task {
  constructor(
    public text: string,
    public day: string,
    public reminder: boolean,
    public id?: number
  ) {
  }
}

export const EMPTY_TASK = new Task('', '', false, -1)
