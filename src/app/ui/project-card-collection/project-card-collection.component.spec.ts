import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardCollectionComponent } from './project-card-collection.component';

describe('ProjectCardCollectionComponent', () => {
  let component: ProjectCardCollectionComponent;
  let fixture: ComponentFixture<ProjectCardCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
