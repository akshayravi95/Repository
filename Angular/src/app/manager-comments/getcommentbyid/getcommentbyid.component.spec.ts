import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcommentbyidComponent } from './getcommentbyid.component';

describe('GetcommentbyidComponent', () => {
  let component: GetcommentbyidComponent;
  let fixture: ComponentFixture<GetcommentbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcommentbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcommentbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
