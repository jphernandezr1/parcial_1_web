import { Component } from '@angular/core';
import { PlantaComponent } from './planta/planta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlantaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
