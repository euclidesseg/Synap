import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/synap-layout/synap-layout.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/lists-explore-page/lists-explore-page.component')
            },
            {
                path: 'topic/:category', // Donde :category será 'ciencia', 'matematicas', etc.
                loadComponent: () => import('./pages/lists-explore-page/lists-explore-page.component')
            },
            {
                path: 'read/:aricle-id',
                loadComponent: () => import('./pages/read-page/read-page.component')
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
