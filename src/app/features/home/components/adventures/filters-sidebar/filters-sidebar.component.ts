import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipComponent } from '../../../../../shared/components/tooltip/tooltip.component';

interface AdventureOption {
  label: string;
  key: string;
  functional: boolean;
  checked: boolean;
}

interface Filters {
  types: string[];
  minPrice: number | null;
  maxPrice: number | null;
}

@Component({
  selector: 'app-filters-sidebar',
  standalone: true,
  imports: [CommonModule, TooltipComponent, FormsModule],
  templateUrl: './filters-sidebar.component.html',
  styleUrl: './filters-sidebar.component.scss'
})
export class FiltersSidebarComponent {

  @Output() filtersChange = new EventEmitter<Filters>();
  @Output() close = new EventEmitter<void>();

  openSection: string | null = 'aventura';

  minPrice: number | null = null;
  maxPrice: number | null = null;

  adventureOptions: AdventureOption[] = [
    { label: 'Quads', key: 'Quads', functional: true, checked: false },
    { label: 'Parapente', key: 'Parapente', functional: true, checked: false },
    { label: 'Rafting', key: 'Rafting', functional: false, checked: false },
    { label: 'Explora', key: 'Explora', functional: false, checked: false },
    { label: 'Buceo', key: 'Buceo', functional: false, checked: false },
    { label: 'Paracaídas', key: 'Paracaidas', functional: false, checked: false },
    { label: 'Snowboard', key: 'Snowboard', functional: false, checked: false },
    { label: 'Surf', key: 'Surf', functional: false, checked: false }
  ];

  toggleSection(section: string): void {
    this.openSection = this.openSection === section ? null : section;
  }

  isOpen(section: string): boolean {
    return this.openSection === section;
  }

  toggleOption(option: AdventureOption): void {
    option.checked = !option.checked;
    this.emitFilters();
  }

  emitFilters(): void {
    const selectedTypes = this.adventureOptions
      .filter(opt => opt.checked && opt.functional)
      .map(opt => opt.key);

    this.filtersChange.emit({
      types: selectedTypes,
      minPrice: this.minPrice ?? null,
      maxPrice: this.maxPrice ?? null
    });
  }
}
