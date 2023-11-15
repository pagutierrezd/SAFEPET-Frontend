import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaClienteUnoComponent } from './pantalla-cliente-uno.component';

describe('PantallaClienteUnoComponent', () => {
  let component: PantallaClienteUnoComponent;
  let fixture: ComponentFixture<PantallaClienteUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaClienteUnoComponent]
    });
    fixture = TestBed.createComponent(PantallaClienteUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
