import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingComponent } from './visiting-component';

describe('VisitingComponent', () => {
  let component: VisitingComponent;
  let fixture: ComponentFixture<VisitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
