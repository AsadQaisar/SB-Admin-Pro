import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipurposeComponent } from './multipurpose.component';

describe('MultipurposeComponent', () => {
  let component: MultipurposeComponent;
  let fixture: ComponentFixture<MultipurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipurposeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
