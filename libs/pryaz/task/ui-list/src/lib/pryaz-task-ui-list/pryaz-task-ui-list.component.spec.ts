import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTaskUiListComponent } from './pryaz-task-ui-list.component';

describe('PryazTaskUiListComponent', () => {
  let component: PryazTaskUiListComponent;
  let fixture: ComponentFixture<PryazTaskUiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTaskUiListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTaskUiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
