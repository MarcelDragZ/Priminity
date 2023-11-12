import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityDataprotectionFeatureDataprotectionComponent } from './priminity-dataprotection-feature-dataprotection.component';

describe('PriminityDataprotectionFeatureDataprotectionComponent', () => {
  let component: PriminityDataprotectionFeatureDataprotectionComponent;
  let fixture: ComponentFixture<PriminityDataprotectionFeatureDataprotectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityDataprotectionFeatureDataprotectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PriminityDataprotectionFeatureDataprotectionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
