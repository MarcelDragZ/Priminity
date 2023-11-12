import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityImprintFeatureImprintComponent } from './priminity-imprint-feature-imprint.component';

describe('PriminityImprintFeatureImprintComponent', () => {
  let component: PriminityImprintFeatureImprintComponent;
  let fixture: ComponentFixture<PriminityImprintFeatureImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityImprintFeatureImprintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminityImprintFeatureImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
