import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTeammemberUiDetailComponent } from './pryaz-teammember-ui-detail.component';

describe('PryazTeammemberUiDetailComponent', () => {
  let component: PryazTeammemberUiDetailComponent;
  let fixture: ComponentFixture<PryazTeammemberUiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTeammemberUiDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTeammemberUiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
