import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTaskFeatureListComponent } from './pryaz-task-feature-list.component';

describe('PryazTaskFeatureListComponent', () => {
  let component: PryazTaskFeatureListComponent;
  let fixture: ComponentFixture<PryazTaskFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTaskFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTaskFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
