import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricePopoverComponent } from './price-popover.component';

describe('PricePopoverComponent', () => {
  let component: PricePopoverComponent;
  let fixture: ComponentFixture<PricePopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricePopoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
