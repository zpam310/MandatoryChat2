/**
 * Created by Tobias on 28-04-2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NewUserComponent } from './new-user/new-user.component';

export const router: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'rooms', component: RoomsComponent },
    { path: '', component: NewUserComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);