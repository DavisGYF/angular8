import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComComponent } from './first-com/first-com.component';
import { HomeComponent } from './home/home.component';
import { ThreeComponent } from './three/three.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'first', component: FirstComComponent },
  { path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule) },
  { path: 'three', component: ThreeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'four', loadChildren: () => import('./four/four.module').then(m => m.FourModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
