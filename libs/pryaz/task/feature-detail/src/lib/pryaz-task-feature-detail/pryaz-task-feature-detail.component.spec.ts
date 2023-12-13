import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTaskFeatureDetailComponent } from './pryaz-task-feature-detail.component';

describe('PryazTaskFeatureDetailComponent', () => {
  let component: PryazTaskFeatureDetailComponent;
  let fixture: ComponentFixture<PryazTaskFeatureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTaskFeatureDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTaskFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
