import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
  name: string = 'Matheus';
  age: number = 30;
  job: string = 'programador';
  hobbies: Array<string> = ['correr', 'jogar', 'estudar'];
  car = {
    name: 'Polo',
    year: 2019
  }
}
