import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMapComponent } from './log-map.component';

describe('LogMapComponent', () => {
  let component: LogMapComponent;
  let fixture: ComponentFixture<LogMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
