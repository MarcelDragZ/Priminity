import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminitySharedFooterComponent } from './priminity-shared-footer.component';

describe('PriminitySharedFooterComponent', () => {
  let component: PriminitySharedFooterComponent;
  let fixture: ComponentFixture<PriminitySharedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminitySharedFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminitySharedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
