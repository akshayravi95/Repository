import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCommentsComponent } from './manager-comments.component';

describe('ManagerCommentsComponent', () => {
  let component: ManagerCommentsComponent;
  let fixture: ComponentFixture<ManagerCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
