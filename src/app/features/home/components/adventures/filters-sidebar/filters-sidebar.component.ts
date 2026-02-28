import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters-sidebar',
  standalone: true,
  templateUrl: './filters-sidebar.component.html',
  styleUrls: ['./filters-sidebar.component.scss']
})
export class FiltersSidebarComponent {

  @Output() filtersChange = new EventEmitter<any>();

  filters = {
    types: [] as string[],
    minPrice: null as number | null,
    maxPrice: null as number | null
  };

  toggleType(type: string, event: any) {
    if (event.target.checked) {
      this.filters.types.push(type);
    } else {
      this.filters.types =
        this.filters.types.filter(t => t !== type);
    }
    this.emitFilters();
  }

  setMinPrice(event: any) {
    this.filters.minPrice = Number(event.target.value);
    this.emitFilters();
  }

  setMaxPrice(event: any) {
    this.filters.maxPrice = Number(event.target.value);
    this.emitFilters();
  }

  emitFilters() {
    this.filtersChange.emit(this.filters);
  }
}