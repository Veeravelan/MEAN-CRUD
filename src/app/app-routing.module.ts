import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register-user' },
  { path: 'register-user', component: RegisterComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'user-list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
