import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowalltasksComponent } from './showalltasks.component';

describe('ShowalltasksComponent', () => {
  let component: ShowalltasksComponent;
  let fixture: ComponentFixture<ShowalltasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowalltasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowalltasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
