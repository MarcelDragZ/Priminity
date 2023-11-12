import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityHomeThemesComponent } from './priminity-home-themes.component';

describe('PriminityHomeThemesComponent', () => {
  let component: PriminityHomeThemesComponent;
  let fixture: ComponentFixture<PriminityHomeThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityHomeThemesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminityHomeThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
