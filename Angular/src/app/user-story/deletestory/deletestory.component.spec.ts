import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletestoryComponent } from './deletestory.component';

describe('DeletestoryComponent', () => {
  let component: DeletestoryComponent;
  let fixture: ComponentFixture<DeletestoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletestoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
