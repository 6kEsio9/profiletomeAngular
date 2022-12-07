import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { LikeComponent } from './like/like.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    LikeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
