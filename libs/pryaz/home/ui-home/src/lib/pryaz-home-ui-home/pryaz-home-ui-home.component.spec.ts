import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazHomeUiHomeComponent } from './pryaz-home-ui-home.component';

describe('PryazHomeUiHomeComponent', () => {
  let component: PryazHomeUiHomeComponent;
  let fixture: ComponentFixture<PryazHomeUiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazHomeUiHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazHomeUiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
