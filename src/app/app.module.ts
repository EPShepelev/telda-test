import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskItemComponent, EditTaskDialogComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
