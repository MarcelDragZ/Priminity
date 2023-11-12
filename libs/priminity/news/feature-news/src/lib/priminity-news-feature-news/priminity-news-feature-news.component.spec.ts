import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityNewsFeatureNewsComponent } from './priminity-news-feature-news.component';

describe('PriminityNewsFeatureNewsComponent', () => {
  let component: PriminityNewsFeatureNewsComponent;
  let fixture: ComponentFixture<PriminityNewsFeatureNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityNewsFeatureNewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminityNewsFeatureNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
