import { LayoutComponent } from './pages/user/layout/layout/layout.component';
import { HomeComponent } from './pages/user/home/home.component';
import { AllUserComponent } from './pages/all-user/all-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
         data: {}
    },

    {
        path: 'login',
        component: LoginComponent,
    },


    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'all',
        component: AllUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
