import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhandoComponent } from './trabalhando.component';

describe('TrabalhandoComponent', () => {
  let component: TrabalhandoComponent;
  let fixture: ComponentFixture<TrabalhandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalhandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
