import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'about',
        loadComponent:() => import('./shared/pages/home-page/home-page.component')
    },
    {
        path: 'explore',
        loadChildren: () => import('./synap/synap.routes')
    },

    {
        path: '',
        redirectTo:'about',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'about'
    }
];
