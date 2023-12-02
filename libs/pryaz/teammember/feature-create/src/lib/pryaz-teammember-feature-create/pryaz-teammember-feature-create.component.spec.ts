import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTeammemberFeatureCreateComponent } from './pryaz-teammember-feature-create.component';

describe('PryazTeammemberFeatureCreateComponent', () => {
  let component: PryazTeammemberFeatureCreateComponent;
  let fixture: ComponentFixture<PryazTeammemberFeatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTeammemberFeatureCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTeammemberFeatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
