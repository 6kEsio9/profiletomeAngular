import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { LikeComponent } from './like/like.component';
import { PostRouter } from './post-routing-module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    LikeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRouter,
    AppRoutingModule
  ]
})
export class PostModule { }
