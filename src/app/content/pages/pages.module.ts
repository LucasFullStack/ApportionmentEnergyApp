import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
   { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
   { path: 'apportionment', loadChildren: () => import('./apportionment/apportionment.module').then( m => m.ApportionmentPageModule)},

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}
