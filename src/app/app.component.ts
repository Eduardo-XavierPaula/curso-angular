import { Component } from '@angular/core';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [FirstComponentComponent, ParentDataComponent, DirectivesComponent]
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
    email: 'joaquim@email.com',
    role: 'Admin',
  }

  title = 'curso-angular';
}
