import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SrcSetItem = { src: string; w: number };

interface SlideImageSources {
  webp: SrcSetItem[];
  jpg: SrcSetItem[];
  alt: string;
}

interface HeroSlide {
  image: SlideImageSources;
  title: string;
  subtitle: string;
  buttonText: string;
  href?: string; // opcional si el CTA navega
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
})
export class HeroSliderComponent {
  slides: HeroSlide[] = [
    {
      image: {
        alt: 'Ruta por Australia',
        webp: [
          { src: 'assets/images/hero/hero-1-480.webp', w: 480 },
          { src: 'assets/images/hero/hero-1-768.webp', w: 768 },
          { src: 'assets/images/hero/hero-1-1200.webp', w: 1200 },
          { src: 'assets/images/hero/hero-1-1600.webp', w: 1600 },
          { src: 'assets/images/hero/hero-1-2400.webp', w: 2400 },
        ],
        jpg: [
          { src: 'assets/images/hero/hero-1-480.jpg', w: 480 },
          { src: 'assets/images/hero/hero-1-768.jpg', w: 768 },
          { src: 'assets/images/hero/hero-1-1200.jpg', w: 1200 },
          { src: 'assets/images/hero/hero-1-1600.jpg', w: 1600 },
          { src: 'assets/images/hero/hero-1-2400.jpg', w: 2400 },
        ],
      },
      title: 'Ruta por Australia',
      subtitle: 'Si te va la aventura, no te lo puedes perder',
      buttonText: 'Más información',
      href: '/aventura',
    },

    {
      image: {
        alt: 'Descubre Islandia',
        webp: [
          { src: 'assets/images/hero/hero-2-480.webp', w: 480 },
          { src: 'assets/images/hero/hero-2-768.webp', w: 768 },
          { src: 'assets/images/hero/hero-2-1200.webp', w: 1200 },
          { src: 'assets/images/hero/hero-2-1600.webp', w: 1600 },
          { src: 'assets/images/hero/hero-2-2400.webp', w: 2400 },
        ],
        jpg: [
          { src: 'assets/images/hero/hero-2-480.jpg', w: 480 },
          { src: 'assets/images/hero/hero-2-768.jpg', w: 768 },
          { src: 'assets/images/hero/hero-2-1200.jpg', w: 1200 },
          { src: 'assets/images/hero/hero-2-1600.jpg', w: 1600 },
          { src: 'assets/images/hero/hero-2-2400.jpg', w: 2400 },
        ],
      },
      title: 'Descubre Islandia',
      subtitle: 'Naturaleza en estado puro',
      buttonText: 'Explorar',
      href: '/destinos',
    },

    {
      image: {
        alt: 'Planifica tu próxima aventura',
        webp: [
          { src: 'assets/images/hero/hero-3-480.webp', w: 480 },
          { src: 'assets/images/hero/hero-3-768.webp', w: 768 },
          { src: 'assets/images/hero/hero-3-1200.webp', w: 1200 },
          { src: 'assets/images/hero/hero-3-1600.webp', w: 1600 },
          { src: 'assets/images/hero/hero-3-2400.webp', w: 2400 },
        ],
        jpg: [
          { src: 'assets/images/hero/hero-3-480.jpg', w: 480 },
          { src: 'assets/images/hero/hero-3-768.jpg', w: 768 },
          { src: 'assets/images/hero/hero-3-1200.jpg', w: 1200 },
          { src: 'assets/images/hero/hero-3-1600.jpg', w: 1600 },
          { src: 'assets/images/hero/hero-3-2400.jpg', w: 2400 },
        ],
      },
      title: 'Tu próxima aventura empieza aquí',
      subtitle: 'Explora rutas únicas y diseña un viaje a tu medida',
      buttonText: 'Descubrir rutas',
      href: '/aventura',
    },
  ];

  currentIndex = 0;

  next(): void {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  // Helpers para construir srcset en el template
  toSrcSet(items: SrcSetItem[]): string {
    return items.map(i => `${i.src} ${i.w}w`).join(', ');
  }
}