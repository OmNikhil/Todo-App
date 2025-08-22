import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Todo-App');
items: {id:number; task: string; done: boolean}[]=[];
newTodo: any;

getTodos() {}

onSubmit() {}

toggleDone() {}

onCheckboxChange() {}

deleteTodo() {}

deleteAll() {}

editTodo() {}

resetForm() {}

exitApp() {
  alert('Exit requested (cannot close tab from script).');
}
}
