import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazLoginUiLoginComponent } from './pryaz-login-ui-login.component';

describe('PryazLoginUiLoginComponent', () => {
  let component: PryazLoginUiLoginComponent;
  let fixture: ComponentFixture<PryazLoginUiLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazLoginUiLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazLoginUiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
