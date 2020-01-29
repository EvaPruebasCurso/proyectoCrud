import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadotipoComponent } from './listadotipo.component';

describe('ListadotipoComponent', () => {
  let component: ListadotipoComponent;
  let fixture: ComponentFixture<ListadotipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadotipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadotipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
