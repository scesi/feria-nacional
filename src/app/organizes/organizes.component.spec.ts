import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizesComponent } from './organizes.component';

describe('OrganizesComponent', () => {
  let component: OrganizesComponent;
  let fixture: ComponentFixture<OrganizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
