import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  showValidationErrors: boolean;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.tasks = this.dataService.getAllTasks();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return (this.showValidationErrors = true);
    this.dataService.addTask(new Task(form.value.text));
    this.showValidationErrors = false;
    form.reset();
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }

  editTask(task: Task) {
    const index = this.tasks.indexOf(task);

    let dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width: '600px',
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTask(index, result);
      }
    });
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.dataService.deleteTask(index);
  }
}
