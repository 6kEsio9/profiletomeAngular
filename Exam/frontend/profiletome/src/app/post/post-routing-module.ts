import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: 'posts/create',
        canActivate: [AuthGuard],
        component: CreateComponent
    },
    {
        path: 'posts/edit/:id',
        canActivate: [AuthGuard],
        component: EditComponent
    }, {
        path: 'posts/delete/:id',
        canActivate: [AuthGuard],
        component: DeleteComponent
    }
];

export const PostRouter = RouterModule.forChild(routes);