import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
    {
        path:'',
        component:MainPage
    },
    {
        path:'policy',
        component:PrivacyPolicy
    },
];
