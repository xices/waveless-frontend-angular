import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PriceBreakdownRow {
  label: string;
  value: string;
}

@Component({
  selector: 'app-price-popover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-popover.component.html',
  styleUrls: ['./price-popover.component.scss']
})
export class PricePopoverComponent {

  @Input() id!: string;
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() rows: PriceBreakdownRow[] = [];
  @Input() total!: string;
  @Input() openAbove = false;
  @Input() days?: number;

  @Output() close = new EventEmitter<void>();

  closePopover() {
    this.close.emit();
  }
}
