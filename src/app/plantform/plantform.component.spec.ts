import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantformComponent } from './plantform.component';

describe('PlantformComponent', () => {
  let component: PlantformComponent;
  let fixture: ComponentFixture<PlantformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
