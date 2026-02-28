import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersSidebarComponent } from './filters-sidebar/filters-sidebar.component';
import { AdventureCardComponent, Trip } from './adventure-card/adventure-card.component';

@Component({
  selector: 'app-adventures',
  standalone: true,
  imports: [CommonModule, FiltersSidebarComponent, AdventureCardComponent],
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss']
})
export class AdventuresComponent {

  trips: Trip[] = [
    {
      title: 'Descubre Bangkok',
      image: 'assets/images/trip1.jpg',
      location: 'Marruecos, África',
      price: 248,
      category: 'Quads'
    },
    {
      title: 'Desierto Experience',
      image: 'assets/images/trip2.jpg',
      location: 'Marruecos, África',
      price: 300,
      category: 'Parapente'
    }
  ];

  filteredTrips = [...this.trips];

  onFiltersChange(filters: any) {

    this.filteredTrips = this.trips.filter(trip => {

      const matchType =
        filters.types.length === 0 ||
        filters.types.includes(trip.category);

      const matchMin =
        !filters.minPrice || trip.price >= filters.minPrice;

      const matchMax =
        !filters.maxPrice || trip.price <= filters.maxPrice;

      return matchType && matchMin && matchMax;
    });
  }
}
