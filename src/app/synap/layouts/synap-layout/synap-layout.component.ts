import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { TobBarComponent } from '../../components/tob-bar.component/tob-bar.component';

interface Category {
  id: string;
  name: string;
  icon: string
  url: string
}

@Component({
  selector: 'app-synap-layout',
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
    TobBarComponent
],
  styleUrl:'./synap-layout.component.css',
  templateUrl: './synap-layout.component.html',
})
export default class SynapLayoutComponent {

  categories = signal<Category[]>([
    { id: 'all', name: 'Explorar Todo', icon: 'fa-solid fa-hashtag', url: '/explore' },
    {
      id: 'research', name: 'Investigación', icon: 'fa-solid fa-flask', url: '/explore/Investigaciones'
    },
    {
      id: 'reviews', name: 'Reseñas Literarias', icon: 'fa-solid fa-book-open', url: '/explore/reseñas'
    },
    {
      id: 'study', name: 'Técnicas de Estudio', icon: 'fa-regular fa-lightbulb', url: '/explore/Articulos'
    },
    {
      id: 'tech', name: 'Tecnología Educativa', icon: 'fa-solid fa-pen-nib', url: '/explore/Tecnologia'
    },
  ]
  )

}
