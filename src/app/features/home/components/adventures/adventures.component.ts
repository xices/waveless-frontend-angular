import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersSidebarComponent } from './filters-sidebar/filters-sidebar.component';
import { AdventureCardComponent, Trip } from './adventure-card/adventure-card.component';

interface Filters {
  types: string[];
  minPrice: number | null;
  maxPrice: number | null;
}

@Component({
  selector: 'app-adventures',
  standalone: true,
  imports: [
    CommonModule,
    FiltersSidebarComponent,
    AdventureCardComponent
  ],
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss']
})
export class AdventuresComponent {

  isFiltersOpen = false;

  region = 'Asia';

  /** Dataset principal */
  trips: Trip[] = [
    {
      title: 'Descubre Bangkok con Iberojet',
      image: 'assets/images/adventures/bangkok-1200.webp',
      location: 'Bangkok, Tailandia',
      price: 248,
      category: 'Quads',
      days: 9
    },
    {
      title: 'Desierto Experience',
      image: 'assets/images/adventures/desert-1200.webp',
      location: 'Dubai, Emiratos Árabes',
      price: 300,
      category: 'Parapente',
      days: 9
    },
    {
      title: 'Explora el Atlas',
      image: 'assets/images/adventures/atlas-1200.webp',
      location: 'Kathmandú, Nepal',
      price: 275,
      category: 'Quads',
      days: 9
    },
    {
      title: 'Aventura en Marrakech',
      image: 'assets/images/adventures/marrakech-1200.webp',
      location: 'Bali, Indonesia',
      price: 320,
      category: 'Parapente',
      days: 9
    },
    {
      title: 'Safari en el desierto',
      image: 'assets/images/adventures/safari-1200.webp',
      location: 'Sri Lanka',
      price: 410,
      category: 'Quads',
      days: 9
    },

    {
      title: 'Ruta por el Mekong',
      image: 'assets/images/adventures/mekong-1200.webp',
      location: 'Vietnam',
      price: 360,
      category: 'Quads',
      days: 9
    },
    {
      title: 'Templos de Angkor',
      image: 'assets/images/adventures/angkor-1200.webp',
      location: 'Camboya',
      price: 390,
      category: 'Parapente',
      days: 9
    },
    {
      title: 'Aventura en el Himalaya',
      image: 'assets/images/adventures/himalaya-1200.webp',
      location: 'India',
      price: 520,
      category: 'Quads',
      days: 9
    },
    {
      title: 'Islas Phi Phi Experience',
      image: 'assets/images/adventures/phiphi-1200.webp',
      location: 'Tailandia',
      price: 430,
      category: 'Parapente',
      days: 9
    },
    {
      title: 'Safari en Borneo',
      image: 'assets/images/adventures/borneo-1200.webp',
      location: 'Malasia',
      price: 480,
      category: 'Quads',
      days: 9
    }
  ];

  /** Estado filtrado */
  filteredTrips: Trip[] = [...this.trips];

  /** Manejo de filtros */
  onFiltersChange(filters: Filters): void {

    this.filteredTrips = this.trips.filter(trip => {

      const matchType =
        filters.types.length === 0 ||
        filters.types.includes(trip.category);

      const matchMin =
        filters.minPrice === null ||
        trip.price >= filters.minPrice;

      const matchMax =
        filters.maxPrice === null ||
        trip.price <= filters.maxPrice;

      return matchType && matchMin && matchMax;
    });
  }

  trackByTrip(index: number, trip: Trip): string {
    return trip.title;
  }

  openFilters() {
    this.isFiltersOpen = true;
  }

  closeFilters() {
    this.isFiltersOpen = false;
  }
}