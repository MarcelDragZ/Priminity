import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminitySharedCardFeatureCardComponent } from './priminity-shared-card-feature-card.component';

describe('PriminitySharedCardFeatureCardComponent', () => {
  let component: PriminitySharedCardFeatureCardComponent;
  let fixture: ComponentFixture<PriminitySharedCardFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminitySharedCardFeatureCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminitySharedCardFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
