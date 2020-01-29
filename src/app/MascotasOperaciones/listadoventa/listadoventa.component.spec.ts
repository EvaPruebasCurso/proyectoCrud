import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoventaComponent } from './listadoventa.component';

describe('ListadoventaComponent', () => {
  let component: ListadoventaComponent;
  let fixture: ComponentFixture<ListadoventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
