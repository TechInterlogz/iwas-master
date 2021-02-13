import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateMemberComponent} from "./features/membership/create-member/create-member.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";

import {DazzlingDebtComponent} from "./features/dazzling-debt/dazzling-debt.component";
import {ViewMemberComponent} from "./features/membership/view-member/view-member.component";
import {LoginComponent} from "./features/login/login.component";
import { CreateSubscriptionComponent } from "./features/subscription/create-subscription/create-subscription.component";
import { ViewSubscriptionComponent } from "./features/subscription/view-subscription/view-subscription.component";

const routes: Routes = [
  { path : 'create-member', component : CreateMemberComponent},
  { path : 'view-member', component : ViewMemberComponent},
  { path : 'dashboard',  component : DashboardComponent},
  
  { path : 'dazzling-debt',   component:DazzlingDebtComponent},
  { path : 'login',   component:LoginComponent},
  { path : 'create-subscription', component: CreateSubscriptionComponent},
  { path : 'view-subscription', component:ViewSubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
