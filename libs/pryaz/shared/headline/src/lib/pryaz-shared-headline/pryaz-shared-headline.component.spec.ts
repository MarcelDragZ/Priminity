import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazSharedHeadlineComponent } from './pryaz-shared-headline.component';

describe('PryazSharedHeadlineComponent', () => {
  let component: PryazSharedHeadlineComponent;
  let fixture: ComponentFixture<PryazSharedHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazSharedHeadlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazSharedHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
