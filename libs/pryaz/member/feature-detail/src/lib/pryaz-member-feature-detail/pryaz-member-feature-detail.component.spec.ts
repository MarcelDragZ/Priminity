import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMemberFeatureDetailComponent } from './pryaz-member-feature-detail.component';

describe('PryazMemberFeatureDetailComponent', () => {
  let component: PryazMemberFeatureDetailComponent;
  let fixture: ComponentFixture<PryazMemberFeatureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMemberFeatureDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMemberFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
