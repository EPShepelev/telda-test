import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  showValidationErrors: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.tasks = this.dataService.getAllTasks();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return (this.showValidationErrors = true);
    this.dataService.addTask(new Task(form.value.text));
  }
}
