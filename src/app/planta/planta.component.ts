import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css'],
})
export class PlantaComponent implements OnInit {
  plantas: Planta[] = [];
  cantidadInterior: number = 0;
  cantidadExterior: number = 0;

  constructor(private plantaService: PlantaService) {}

  ngOnInit(): void {
    this.plantaService.getPlantas().subscribe(data => {
      this.plantas = data;

      this.cantidadInterior = this.plantas.filter(p => p.tipo.toLowerCase() === 'interior').length;
      this.cantidadExterior = this.plantas.filter(p => p.tipo.toLowerCase() === 'exterior').length;
    });
  }
}
