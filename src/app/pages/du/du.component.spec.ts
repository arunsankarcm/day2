import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DUComponent } from './du.component';

describe('DUComponent', () => {
  let component: DUComponent;
  let fixture: ComponentFixture<DUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DUComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
