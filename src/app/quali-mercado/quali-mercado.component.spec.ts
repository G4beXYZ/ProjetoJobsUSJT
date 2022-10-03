import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualiMercadoComponent } from './quali-mercado.component';

describe('QualiMercadoComponent', () => {
  let component: QualiMercadoComponent;
  let fixture: ComponentFixture<QualiMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualiMercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualiMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
