import { Routes } from '@angular/router';
import { MainPage } from './layout/main-page/main-page';
import { PrivacyPolicy } from './layout/privacy-policy/privacy-policy';
import { LegalNotice } from './layout/legal-notice/legal-notice';

export const routes: Routes = [
    {
        path:'',
        component:MainPage
    },
    {
        path:'policy',
        component:PrivacyPolicy
    },
    {
        path:'legal',
        component:LegalNotice
    },
    {
        path:'**',
        redirectTo:''
    },
];
