import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Todo-App');
  // isEdit= false;
  // newTodo: any;
  // items: { id: number; task: String; done: boolean }[] = [];
  


  // getTodo(){}

  // onSubmit(){}

  // editTodo(){}

  // deleteTodo(){}

  // deleteAll(){}

  // exitTodo(){}


   newTodo: string = '';
  isEdit = false;
  editIndex: number | null = null;

  items: { id: number; task: string; done: boolean }[] = [];

  // Add new todo or update existing one
  onSubmit() {
    if (this.newTodo.trim() === '') return;

    if (this.isEdit && this.editIndex !== null) {
      this.items[this.editIndex].task = this.newTodo;
      this.exitTodo();
    } else {
      this.items.push({
        id: Date.now(),
        task: this.newTodo,
        done: false
      });
    }

    this.newTodo = '';
  }

  // Start editing a todo
  editTodo(index: number) {
    this.newTodo = this.items[index].task;
    this.editIndex = index;
    this.isEdit = true;
  }

  // Exit editing mode
  exitTodo() {
    this.newTodo = '';
    this.editIndex = null;
    this.isEdit = false;
  }

  // Delete a specific todo
  deleteTodo(index: number) {
    this.items.splice(index, 1);
    this.exitTodo();
  }

  // Delete all todos
  deleteAll() {
    this.items = [];
    this.exitTodo();
  }

  // Toggle done status
  toggleDone(index: number) {
    this.items[index].done = !this.items[index].done;
  }
}
