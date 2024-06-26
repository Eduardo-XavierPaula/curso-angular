import { Component } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 5},
    {name: "Bob", type: "Horse", age: 1},
  ]

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
