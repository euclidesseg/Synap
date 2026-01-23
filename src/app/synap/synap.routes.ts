import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/synap-layout/synap-layout.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/publication-page/publication-page.component')
            },
            {
                path: 'topic/:category', // Donde :category será 'ciencia', 'matematicas', etc.
                loadComponent: () => import('./pages/publication-page/publication-page.component')
            },
            {
                path: 'read/:aricle-id',
                loadComponent: () => import('./pages/publication-detail-page/publication-detail-page.component')
            },
            {
                path:'**',
                redirectTo:'',
                pathMatch:'full'
            }
        ]
    },
];

export default routes;
