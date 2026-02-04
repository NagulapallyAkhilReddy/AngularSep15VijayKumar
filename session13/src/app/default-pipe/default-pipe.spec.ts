import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPipe } from './default-pipe';

describe('DefaultPipe', () => {
  let component: DefaultPipe;
  let fixture: ComponentFixture<DefaultPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
