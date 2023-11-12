import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityHomeFeatureHomeComponent } from './priminity-home-feature-home.component';

describe('PriminityHomeFeatureHomeComponent', () => {
  let component: PriminityHomeFeatureHomeComponent;
  let fixture: ComponentFixture<PriminityHomeFeatureHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityHomeFeatureHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminityHomeFeatureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
