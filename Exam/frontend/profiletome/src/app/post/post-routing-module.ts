import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: 'posts/create',
        component: CreateComponent
    },
    {
        path: 'posts/edit/:id',
        component: EditComponent
    },{
        path: 'posts/delete/:id',
        component: DeleteComponent
    }
];

export const PostRouter = RouterModule.forChild(routes);