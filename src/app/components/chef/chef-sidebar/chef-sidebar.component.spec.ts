import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSidebarComponent } from './chef-sidebar.component';

describe('ChefSidebarComponent', () => {
  let component: ChefSidebarComponent;
  let fixture: ComponentFixture<ChefSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
