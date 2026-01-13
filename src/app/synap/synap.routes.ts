import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/synap-layout/synap-layout.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/lists-explore/lists-explore-page.component')
            },
            {
                path: ':category',
                loadComponent: () => import('./pages/lists-explore/lists-explore-page.component')
            },
            {
                path:'**',
                redirectTo:''
            }
        ]
    }
];

export default routes;
