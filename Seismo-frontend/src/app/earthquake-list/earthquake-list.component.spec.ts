import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeListComponent } from './earthquake-list.component';

describe('EarthquakeListComponent', () => {
  let component: EarthquakeListComponent;
  let fixture: ComponentFixture<EarthquakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
