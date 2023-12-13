import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTaskFeatureCreateComponent } from './pryaz-task-feature-create.component';

describe('PryazTaskFeatureCreateComponent', () => {
  let component: PryazTaskFeatureCreateComponent;
  let fixture: ComponentFixture<PryazTaskFeatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTaskFeatureCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTaskFeatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
