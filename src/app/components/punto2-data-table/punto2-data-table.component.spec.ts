import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2DataTableComponent } from './punto2-data-table.component';

describe('Punto2DataTableComponent', () => {
  let component: Punto2DataTableComponent;
  let fixture: ComponentFixture<Punto2DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto2DataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
