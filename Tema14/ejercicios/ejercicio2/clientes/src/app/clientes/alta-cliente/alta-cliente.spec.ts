import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCliente } from './alta-cliente';

describe('AltaCliente', () => {
  let component: AltaCliente;
  let fixture: ComponentFixture<AltaCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaCliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
