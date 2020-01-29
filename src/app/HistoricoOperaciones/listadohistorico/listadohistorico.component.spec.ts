import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadohistoricoComponent } from './listadohistorico.component';

describe('ListadohistoricoComponent', () => {
  let component: ListadohistoricoComponent;
  let fixture: ComponentFixture<ListadohistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadohistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadohistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
