import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityLogosFeatureLogosComponent } from './priminity-logos-feature-logos.component';

describe('PriminityLogosFeatureLogosComponent', () => {
  let component: PriminityLogosFeatureLogosComponent;
  let fixture: ComponentFixture<PriminityLogosFeatureLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityLogosFeatureLogosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminityLogosFeatureLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
