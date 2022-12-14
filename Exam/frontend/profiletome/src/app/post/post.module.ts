import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { PostRouter } from './post-routing-module';
import { AppRoutingModule } from '../app-routing.module';
import { PostComponent } from './post/post.component';
import { ApiService } from '../api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRouter,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    PostComponent
  ],
  providers: [
    ApiService
  ]
})
export class PostModule { }
