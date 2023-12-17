import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazSharedLogoComponent } from './pryaz-shared-logo.component';

describe('PryazSharedLogoComponent', () => {
  let component: PryazSharedLogoComponent;
  let fixture: ComponentFixture<PryazSharedLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazSharedLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazSharedLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
