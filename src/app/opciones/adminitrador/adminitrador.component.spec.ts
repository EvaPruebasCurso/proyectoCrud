import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminitradorComponent } from './adminitrador.component';

describe('AdminitradorComponent', () => {
  let component: AdminitradorComponent;
  let fixture: ComponentFixture<AdminitradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminitradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminitradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
