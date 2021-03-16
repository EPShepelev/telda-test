import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss'],
})
export class EditTaskDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm) {
    const updatedTask = {
      ...this.task,
      ...form.value,
    };
    this.dialogRef.close(updatedTask);
  }
}
