import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityRulesFeatureRulesComponent } from './priminity-rules-feature-rules.component';

describe('PriminityRulesFeatureRulesComponent', () => {
  let component: PriminityRulesFeatureRulesComponent;
  let fixture: ComponentFixture<PriminityRulesFeatureRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityRulesFeatureRulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminityRulesFeatureRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
