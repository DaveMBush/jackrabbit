import { Guard } from './shared/guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
}, {
    path: 'contact',
    loadChildren:
    './routes/contact/contact.module#ContactModule'
}, {
    path: 'subscription',
    canLoad: [Guard],
    loadChildren:
    './routes/subscription/subscription.module#SubscriptionModule'
}, {
    path: 'review',
    canLoad: [Guard],
    loadChildren: './routes/review/review.module#ReviewModule'
}, {
    path: 'thankyou',
    canLoad: [Guard],
    loadChildren: './routes/thankyou/thankyou.module#ThankyouModule'
}, {
    path: 'file-not-found',
    loadChildren: './routes/file-not-found/file-not-found.module#FileNotFoundModule'
}, {
    path: '**',
    redirectTo: 'file-not-found'
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
