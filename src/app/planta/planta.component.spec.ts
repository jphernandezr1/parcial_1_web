import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaComponent } from './planta.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantaListarComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantaComponent,CommonModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('crear 3 plantas y ver que esten presentes', () => {
    const fixture = TestBed.createComponent(PlantaComponent);
    const component = fixture.componentInstance;

    component.plantas = [
      { id: 1, nombre_comun: 'Cactus', nombre_cientifico: '', tipo: 'interior', clima: 'seco', altura_maxima: 0, origen: '', imagen: '' },
      { id: 2, nombre_comun: 'Orquídea', nombre_cientifico: '', tipo: 'interior', clima: 'húmedo', altura_maxima: 0, origen: '', imagen: '' },
      { id: 3, nombre_comun: 'Helecho', nombre_cientifico: '', tipo: 'exterior', clima: 'templado', altura_maxima: 0, origen: '', imagen: '' },
    ];

    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
    expect(rows[0].textContent).toContain('Cactus');
    expect(rows[1].textContent).toContain('Orquídea');
    expect(rows[2].textContent).toContain('Helecho');
    expect(rows[0].textContent).toContain('interior');
    expect(rows[1].textContent).toContain('interior');
    expect(rows[2].textContent).toContain('exterior');
    expect(rows[0].textContent).toContain('seco');
    expect(rows[1].textContent).toContain('húmedo');
    expect(rows[2].textContent).toContain('templado');
  });
});
