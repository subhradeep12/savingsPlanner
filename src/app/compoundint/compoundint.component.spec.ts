import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundintComponent } from './compoundint.component';

describe('CompoundintComponent', () => {
  let component: CompoundintComponent;
  let fixture: ComponentFixture<CompoundintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoundintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
