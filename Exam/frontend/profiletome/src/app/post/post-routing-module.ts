import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { LikeComponent } from './like/like.component';

const routes: Routes = [
    {
        path: 'post/create',
        component: CreateComponent
    },
    {
        path: 'post/edit/:id',
        component: EditComponent
    },
    {
        path: 'post/like/:id',
        component: LikeComponent
    },{
        path: 'post/delete/:id',
        component: DeleteComponent
    }
];

export const PostRouter = RouterModule.forChild(routes);