import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowalluserstoriesComponent } from './showalluserstories.component';

describe('ShowalluserstoriesComponent', () => {
  let component: ShowalluserstoriesComponent;
  let fixture: ComponentFixture<ShowalluserstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowalluserstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowalluserstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
