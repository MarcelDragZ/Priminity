import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminitySharedMenuComponent } from './priminity-shared-menu.component';

describe('PriminitySharedMenuComponent', () => {
  let component: PriminitySharedMenuComponent;
  let fixture: ComponentFixture<PriminitySharedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminitySharedMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminitySharedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
