import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePopoverComponent } from '../../../../../shared/components/price-popover/price-popover.component';

export interface Trip {
  id: string;           
  title: string;
  image: string;
  location: string;
  price: number;
  category: string;
  days: number;
}

@Component({
  selector: 'app-adventure-card',
  standalone: true,
  imports: [CommonModule, PricePopoverComponent],
  templateUrl: './adventure-card.component.html',
  styleUrl: './adventure-card.component.scss',
})
export class AdventureCardComponent {

  @Input() trip!: Trip;

  isBreakdownOpen = false;
  openAbove = false;

  toggleBreakdown(event: MouseEvent): void {
    this.isBreakdownOpen = !this.isBreakdownOpen;

    if (this.isBreakdownOpen) {
      setTimeout(() => this.calculatePosition(event));
    }
  }

  calculatePosition(event: MouseEvent): void {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;

    const dialogHeight = 320; // aprox alto popover
    this.openAbove = spaceBelow < dialogHeight;
  }

  get breakdownRows() {
    return [
      { label: 'Precio antes de impuestos', value: '1.124,00 €' },
      { label: 'Impuesto', value: '4,43 €' },
      { label: 'Lorem ipsum', value: '150,42 €' }
    ];
  }

  get totalPrice() {
    return '2.455,00 €';
  }
}
