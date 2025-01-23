import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { TaskListComponent } from '../task-list/task-list.component';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, TaskListComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTask implements OnInit {
  tasks = signal<Task[]>([]);
  newTask = signal('');

  constructor() { }
  ngOnInit(): void {
  }
  addTask() {
    if (this.newTask().trim() !== '') {
      const newTask: Task = {
        name: this.newTask(),
        completed: false
      };
      this.tasks.update((tasks) => [...tasks, newTask]);
      this.newTask.set('');
    }
  }
}
