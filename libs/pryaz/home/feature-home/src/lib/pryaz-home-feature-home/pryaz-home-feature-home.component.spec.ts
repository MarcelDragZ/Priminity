import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazHomeFeatureHomeComponent } from './pryaz-home-feature-home.component';

describe('PryazHomeFeatureHomeComponent', () => {
  let component: PryazHomeFeatureHomeComponent;
  let fixture: ComponentFixture<PryazHomeFeatureHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazHomeFeatureHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazHomeFeatureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
