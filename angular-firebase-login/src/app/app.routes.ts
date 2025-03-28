import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index/index.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './services/guardService/guard.service';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';

export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' }, // Redirige a la ruta 'index'
    { path: 'login', component: LoginComponent},
    { path: 'index', component: IndexComponent,canActivate: [authGuard]},
    { path: 'article-detail', component: ArticleDetailComponent},
    //{ path: 'whoweare', component: AboutComponent },
    { path: 'edit-form', component: EditFormComponent,canActivate: [authGuard] },
    { path: 'create-article', component: CreateArticleComponent,canActivate: [authGuard] },
    
];