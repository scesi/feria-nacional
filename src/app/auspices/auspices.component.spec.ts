import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuspicesComponent } from './auspices.component';

describe('AuspicesComponent', () => {
  let component: AuspicesComponent;
  let fixture: ComponentFixture<AuspicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuspicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuspicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
