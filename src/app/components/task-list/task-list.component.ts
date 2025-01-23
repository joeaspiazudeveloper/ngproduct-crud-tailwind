import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  constructor() { }
  ngOnInit(): void {
  }
  removeProduct(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }
}
