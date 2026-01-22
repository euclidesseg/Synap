import { Routes } from '@angular/router';
import EditPageComponent from './synap/pages/edit-page/edit-page.component';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./shared/pages/home-page/home-page.component')
    },
    {
        path: 'explore',
        loadChildren: () => import('./synap/synap.routes')
    },

    {
        path: 'edit',
        loadComponent: () => import('./synap/pages/edit-page/edit-page.component')
    },

    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
