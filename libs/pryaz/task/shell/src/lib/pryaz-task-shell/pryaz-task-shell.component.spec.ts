import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTaskShellComponent } from './pryaz-task-shell.component';

describe('PryazTaskShellComponent', () => {
  let component: PryazTaskShellComponent;
  let fixture: ComponentFixture<PryazTaskShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTaskShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTaskShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
