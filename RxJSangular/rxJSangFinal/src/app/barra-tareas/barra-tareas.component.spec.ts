import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTareasComponent } from './barra-tareas.component';

describe('BarraTareasComponent', () => {
  let component: BarraTareasComponent;
  let fixture: ComponentFixture<BarraTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraTareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
