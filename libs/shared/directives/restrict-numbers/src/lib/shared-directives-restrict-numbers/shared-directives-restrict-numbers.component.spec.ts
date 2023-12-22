import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDirectivesRestrictNumbersComponent } from './shared-directives-restrict-numbers.component';

describe('SharedDirectivesRestrictNumbersComponent', () => {
  let component: SharedDirectivesRestrictNumbersComponent;
  let fixture: ComponentFixture<SharedDirectivesRestrictNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDirectivesRestrictNumbersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDirectivesRestrictNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
