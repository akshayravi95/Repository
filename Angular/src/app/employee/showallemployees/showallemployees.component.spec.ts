import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallemployeesComponent } from './showallemployees.component';

describe('ShowallemployeesComponent', () => {
  let component: ShowallemployeesComponent;
  let fixture: ComponentFixture<ShowallemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
