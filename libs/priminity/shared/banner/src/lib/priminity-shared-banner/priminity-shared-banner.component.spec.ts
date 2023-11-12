import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminitySharedBannerComponent } from './priminity-shared-banner.component';

describe('PriminitySharedBannerComponent', () => {
  let component: PriminitySharedBannerComponent;
  let fixture: ComponentFixture<PriminitySharedBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminitySharedBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminitySharedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
