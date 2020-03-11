import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from 'src/guard/auth-guard';


const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
    { path: 'create', component: CreatePostComponent, canActivate: [AuthGuard]},
    { path: 'update', component: UpdatePostComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}