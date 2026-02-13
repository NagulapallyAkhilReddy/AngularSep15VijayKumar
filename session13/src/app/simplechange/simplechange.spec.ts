import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simplechange } from './simplechange';

describe('Simplechange', () => {
  let component: Simplechange;
  let fixture: ComponentFixture<Simplechange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simplechange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simplechange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
