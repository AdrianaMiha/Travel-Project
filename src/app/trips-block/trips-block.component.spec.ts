import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsBlockComponent } from './trips-block.component';

describe('TripsBlockComponent', () => {
  let component: TripsBlockComponent;
  let fixture: ComponentFixture<TripsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
