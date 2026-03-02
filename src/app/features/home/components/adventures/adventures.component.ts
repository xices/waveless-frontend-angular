import { Component, OnInit } from '@angular/core';
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
export class AdventuresComponent implements OnInit {

  isFiltersOpen = false;
  region = 'Asia';

  /** Dataset principal */
  trips: Trip[] = [
    {
      id: 'bangkok',
      title: 'Descubre Bangkok con Iberojet',
      image: 'assets/images/adventures/bangkok-1200.webp',
      location: 'Bangkok, Tailandia',
      price: 248,
      category: 'Quads',
      days: 9
    },
    {
      id: 'desert',
      title: 'Desierto Experience',
      image: 'assets/images/adventures/desert-1200.webp',
      location: 'Dubai, Emiratos Árabes',
      price: 300,
      category: 'Parapente',
      days: 9
    },
    {
      id: 'atlas',
      title: 'Explora el Atlas',
      image: 'assets/images/adventures/atlas-1200.webp',
      location: 'Kathmandú, Nepal',
      price: 275,
      category: 'Quads',
      days: 9
    },
    {
      id: 'marrakech',
      title: 'Aventura en Marrakech',
      image: 'assets/images/adventures/marrakech-1200.webp',
      location: 'Bali, Indonesia',
      price: 320,
      category: 'Parapente',
      days: 9
    },
    {
      id: 'safari',
      title: 'Safari en el desierto',
      image: 'assets/images/adventures/safari-1200.webp',
      location: 'Sri Lanka',
      price: 410,
      category: 'Quads',
      days: 9
    },
    {
      id: 'mekong',
      title: 'Ruta por el Mekong',
      image: 'assets/images/adventures/mekong-1200.webp',
      location: 'Vietnam',
      price: 360,
      category: 'Quads',
      days: 9
    },
    {
      id: 'angkor',
      title: 'Templos de Angkor',
      image: 'assets/images/adventures/angkor-1200.webp',
      location: 'Camboya',
      price: 390,
      category: 'Parapente',
      days: 9
    },
    {
      id: 'himalaya',
      title: 'Aventura en el Himalaya',
      image: 'assets/images/adventures/himalaya-1200.webp',
      location: 'India',
      price: 520,
      category: 'Quads',
      days: 9
    },
    {
      id: 'phiphi',
      title: 'Islas Phi Phi Experience',
      image: 'assets/images/adventures/phiphi-1200.webp',
      location: 'Tailandia',
      price: 430,
      category: 'Parapente',
      days: 9
    },
    {
      id: 'borneo',
      title: 'Safari en Borneo',
      image: 'assets/images/adventures/borneo-1200.webp',
      location: 'Malasia',
      price: 480,
      category: 'Quads',
      days: 9
    }
  ];

  /** Estado filtrado */
  filteredTrips: Trip[] = [];

  /** Bloques visuales estables (NO getter) */
  tripGroups: Trip[][] = [];

  ngOnInit(): void {
    this.filteredTrips = [...this.trips];
    this.buildTripGroups();
  }

  /** Agrupación visual 3 + resto */
  private buildTripGroups(): void {

    const groups: Trip[][] = [];

    if (!this.filteredTrips.length) {
      this.tripGroups = [];
      return;
    }

    // Primer bloque: 3
    groups.push(this.filteredTrips.slice(0, 3));

    // Segundo bloque: resto
    if (this.filteredTrips.length > 3) {
      groups.push(this.filteredTrips.slice(3));
    }

    this.tripGroups = groups;
  }

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

    // 🔥 IMPORTANTE: reconstruir bloques después de filtrar
    this.buildTripGroups();
  }

  trackByTrip(index: number, trip: Trip): string {
    return trip.id;
  }

  openFilters(): void {
    this.isFiltersOpen = true;
  }

  closeFilters(): void {
    this.isFiltersOpen = false;
  }
}