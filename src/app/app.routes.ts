import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { LegalNotice } from './legal-notice/legal-notice';

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
