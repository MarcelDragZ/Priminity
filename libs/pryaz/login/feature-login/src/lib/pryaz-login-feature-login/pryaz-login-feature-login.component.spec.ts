import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazLoginFeatureLoginComponent } from './pryaz-login-feature-login.component';

describe('PryazLoginFeatureLoginComponent', () => {
  let component: PryazLoginFeatureLoginComponent;
  let fixture: ComponentFixture<PryazLoginFeatureLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazLoginFeatureLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazLoginFeatureLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
