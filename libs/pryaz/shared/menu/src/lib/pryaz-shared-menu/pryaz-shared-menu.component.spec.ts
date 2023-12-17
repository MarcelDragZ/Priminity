import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazSharedMenuComponent } from './pryaz-shared-menu.component';

describe('PryazSharedMenuComponent', () => {
  let component: PryazSharedMenuComponent;
  let fixture: ComponentFixture<PryazSharedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazSharedMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazSharedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
