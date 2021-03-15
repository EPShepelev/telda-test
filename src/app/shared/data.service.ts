import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tasks: Task[] = [
    new Task('This is a text'),
    new Task(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam minus natus unde eum sapiente? Architecto recusandae quod laboriosam ab perspiciatis!'
    ),
  ];

  constructor() {}

  getAllTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(index: number, updatedTask: Task) {
    this.tasks[index] = updatedTask;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
