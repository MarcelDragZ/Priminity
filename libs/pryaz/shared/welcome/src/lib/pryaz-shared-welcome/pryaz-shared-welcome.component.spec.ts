import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazSharedWelcomeComponent } from './pryaz-shared-ui-welcome.component';

describe('PryazSharedWelcomeComponent', () => {
  let component: PryazSharedWelcomeComponent;
  let fixture: ComponentFixture<PryazSharedWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazSharedWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazSharedWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
