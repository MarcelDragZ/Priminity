import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTeammemberShellComponent } from './pryaz-teammember-shell.component';

describe('PryazTeammemberShellComponent', () => {
  let component: PryazTeammemberShellComponent;
  let fixture: ComponentFixture<PryazTeammemberShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTeammemberShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTeammemberShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
