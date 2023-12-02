import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTeammemberFeatureDetailComponent } from './pryaz-teammember-feature-detail.component';

describe('PryazTeammemberFeatureDetailComponent', () => {
  let component: PryazTeammemberFeatureDetailComponent;
  let fixture: ComponentFixture<PryazTeammemberFeatureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTeammemberFeatureDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTeammemberFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
