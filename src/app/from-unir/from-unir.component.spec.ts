import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromUnirComponent } from './from-unir.component';

describe('FromUnirComponent', () => {
  let component: FromUnirComponent;
  let fixture: ComponentFixture<FromUnirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromUnirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromUnirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
