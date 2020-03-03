import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { CreatePostComponent } from './app/create-post/create-post.component';
import { UpdatePostComponent } from './app/update-post/update-post.component';


const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create', component: CreatePostComponent },
    { path: 'update', component: UpdatePostComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}