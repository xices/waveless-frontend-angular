export interface NavItem {
  label: string;
  icon?: string;
  route: string;
  exact?: boolean;
}

export const HEADER_NAV_ITEMS: NavItem[] = [
  {
    label: 'Aventura',
    icon: 'assets/images/icons/icon-aventura.svg',
    route: '/',
    exact: true
  },
  {
    label: 'Destinos',
    icon: 'assets/images/icons/icon-destinos.svg',
    route: '/destinos'
  },
  {
    label: 'Alojamiento',
    icon: 'assets/images/icons/icon-alojamiento.svg',
    route: '/alojamiento'
  },
  {
    label: 'Sobre nosotros',
    route: '/sobre-nosotros'
  }
];