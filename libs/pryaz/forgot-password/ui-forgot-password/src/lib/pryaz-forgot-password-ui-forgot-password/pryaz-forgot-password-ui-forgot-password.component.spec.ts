import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazForgotPasswordUiForgotPasswordComponent } from './pryaz-forgot-password-ui-forgot-password.component';

describe('PryazForgotPasswordUiForgotPasswordComponent', () => {
  let component: PryazForgotPasswordUiForgotPasswordComponent;
  let fixture: ComponentFixture<PryazForgotPasswordUiForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazForgotPasswordUiForgotPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PryazForgotPasswordUiForgotPasswordComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
