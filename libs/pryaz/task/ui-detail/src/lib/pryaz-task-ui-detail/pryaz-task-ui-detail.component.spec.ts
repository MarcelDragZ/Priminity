import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTaskUiDetailComponent } from './pryaz-task-ui-detail.component';

describe('PryazTaskUiDetailComponent', () => {
  let component: PryazTaskUiDetailComponent;
  let fixture: ComponentFixture<PryazTaskUiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTaskUiDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTaskUiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
