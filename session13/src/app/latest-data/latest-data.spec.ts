import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestData } from './latest-data';

describe('LatestData', () => {
  let component: LatestData;
  let fixture: ComponentFixture<LatestData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
