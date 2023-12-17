import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazProfileFeatureProfileComponent } from './pryaz-profile-feature-profile.component';

describe('PryazProfileFeatureProfileComponent', () => {
  let component: PryazProfileFeatureProfileComponent;
  let fixture: ComponentFixture<PryazProfileFeatureProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazProfileFeatureProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazProfileFeatureProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
