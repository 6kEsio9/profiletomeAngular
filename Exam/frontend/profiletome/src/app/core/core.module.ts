import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { PostModule } from '../post/post.module';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FriendComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PostModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class CoreModule { }
