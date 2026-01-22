import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { TobBarComponent } from '../../components/tob-bar.component/tob-bar.component';

interface Topic {
  id: string;
  name: string;
  icon: string
  url: string
}
interface Resource {
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
  styleUrl: './synap-layout.component.css',
  templateUrl: './synap-layout.component.html',
})
export default class SynapLayoutComponent {

  sidebarOpen = signal<boolean>(false);

  topics = signal<Topic[]>([
  { id: 'all', name: 'Explorar Todo', icon: 'fa-solid fa-hashtag', url: '/explore' },
  { id: 'science', name: 'Ciencia', icon: 'fa-solid fa-microscope', url: '/explore/topic/ciencia' },
  { id: 'cinema', name: 'Cine', icon: 'fa-solid fa-film', url: '/explore/topic/cine' },
  { id: 'math', name: 'Matemáticas', icon: 'fa-solid fa-calculator', url: '/explore/topic/matematicas' },
  { id: 'eng', name: 'Ingeniería', icon: 'fa-solid fa-gears', url: '/explore/topic/ingenieria' },
]);

  resources = signal<Resource[]>([
    { 
      id: 'about', 
      name: 'Acerca de Synap', 
      icon: 'fa-solid fa-circle-info', 
      url: '/about' 
    },
    { 
      id: 'privacy', 
      name: 'Política de Privacidad', 
      icon: 'fa-solid fa-shield-halved', 
      url: '/privacy' 
    },
    { 
      id: 'terms', 
      name: 'Acuerdo de Usuario', 
      icon: 'fa-solid fa-file-contract', 
      url: '/terms' 
    },
    { 
      id: 'jobs', 
      name: 'Empleo', 
      icon: 'fa-solid fa-briefcase', 
      url: '/careers' 
    }
  ]);

  readonly LG_BREAKPOINT = 1024; // Tailwind lg

  ngOnInit() {
    this.syncSidebarWithScreen();
    window.addEventListener('resize', this.syncSidebarWithScreen);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.syncSidebarWithScreen);
  }

  toggleSidebar() {
    // Solo permite toggle en mobile
    this.sidebarOpen.update(v => !v);
  }

  private syncSidebarWithScreen = () => {
    if (window.innerWidth >= this.LG_BREAKPOINT) {
      this.sidebarOpen.set(true);
    } else {
      this.sidebarOpen.set(false);
    }
  };

}
