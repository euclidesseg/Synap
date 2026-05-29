import { Routes } from "@angular/router";

const routes:Routes = [
    {
        path:'',
        loadComponent:() => import('./auth.component').then(component => component.AuthComponent),
        children:[
            {
                path:'login',
                title:'Login',
                loadComponent:() => import('./pages/login-page/login-page.component').then(l => l.LoginPageComponent)
            },
            {
                path:'sign-up',
                title:'Signup',
                loadComponent:() => import('./pages/signup-page/signup-page.component').then(s => s.SignUpPageComponent)
            },
            {
                path:'**',
                redirectTo:'login'
            }
        
        ]
    }
]

export default routes