import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMemberShellComponent } from './pryaz-member-shell.component';

describe('PryazMemberShellComponent', () => {
  let component: PryazMemberShellComponent;
  let fixture: ComponentFixture<PryazMemberShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMemberShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMemberShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
