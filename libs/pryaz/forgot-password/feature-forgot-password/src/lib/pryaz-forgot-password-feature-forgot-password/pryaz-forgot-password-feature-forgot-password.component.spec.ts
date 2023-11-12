import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazForgotPasswordFeatureForgotPasswordComponent } from './pryaz-forgot-password-feature-forgot-password.component';

describe('PryazForgotPasswordFeatureForgotPasswordComponent', () => {
  let component: PryazForgotPasswordFeatureForgotPasswordComponent;
  let fixture: ComponentFixture<PryazForgotPasswordFeatureForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazForgotPasswordFeatureForgotPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PryazForgotPasswordFeatureForgotPasswordComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
