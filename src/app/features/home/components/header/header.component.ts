import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  NgZone,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HEADER_NAV_ITEMS, NavItem } from '../../../../core/header-nav.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  isMenuOpen = false;
  navItems: NavItem[] = HEADER_NAV_ITEMS;

  activeRoute: string = this.navItems[0]?.route || '';

  @ViewChild('indicator') indicator!: ElementRef;
  @ViewChild('nav') nav!: ElementRef;

  private resizeObserver!: ResizeObserver;

  constructor(private ngZone: NgZone) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  trackByRoute = (_: number, item: { route?: string }) => item.route;

  ngAfterViewInit(): void {

    // 🔥 Espera a que Angular termine de renderizar
    this.ngZone.onStable.subscribe(() => {
      this.updateIndicator();
    });

    // 🔥 Espera a que las fuentes terminen de cargar (pixel perfect real)
    if ('fonts' in document) {
      (document as any).fonts.ready.then(() => {
        this.updateIndicator();
      });
    }

    // 🔥 Recalcula si cambia tamaño de ventana
    this.resizeObserver = new ResizeObserver(() => {
      this.updateIndicator();
    });

    this.resizeObserver.observe(this.nav.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  setActive(route: string, event: Event): void {
    this.activeRoute = route;
    const link = event.currentTarget as HTMLElement;
    this.moveIndicatorFromElement(link);
  }

  private updateIndicator(): void {
    const activeLink =
      this.nav.nativeElement.querySelector('.active');

    if (activeLink) {
      this.moveIndicatorFromElement(activeLink);
    }
  }

  private moveIndicatorFromElement(element: HTMLElement): void {
    const navRect = this.nav.nativeElement.getBoundingClientRect();
    const rect = element.getBoundingClientRect();

    const offsetLeft = rect.left - navRect.left;

    this.indicator.nativeElement.style.width = `${rect.width}px`;
    this.indicator.nativeElement.style.transform =
      `translateX(${offsetLeft}px)`;
  }
}