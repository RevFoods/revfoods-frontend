import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChefComponent } from './manage-chef.component';

describe('ManageChefComponent', () => {
  let component: ManageChefComponent;
  let fixture: ComponentFixture<ManageChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
