import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Trip {
  title: string;
  image: string;
  location: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-adventure-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adventure-card.component.html',
  styleUrl: './adventure-card.component.scss',
})
export class AdventureCardComponent {
  @Input() trip!: Trip;
}
