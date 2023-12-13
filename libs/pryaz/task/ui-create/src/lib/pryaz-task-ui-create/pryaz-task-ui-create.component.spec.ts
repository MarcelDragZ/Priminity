import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTaskUiCreateComponent } from './pryaz-task-ui-create.component';

describe('PryazTaskUiCreateComponent', () => {
  let component: PryazTaskUiCreateComponent;
  let fixture: ComponentFixture<PryazTaskUiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTaskUiCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTaskUiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
