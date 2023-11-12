import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityHomeSlideshowComponent } from './priminity-home-slideshow.component';

describe('PriminityHomeSlideshowComponent', () => {
  let component: PriminityHomeSlideshowComponent;
  let fixture: ComponentFixture<PriminityHomeSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityHomeSlideshowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminityHomeSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
