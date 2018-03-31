import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: 'storys', component: StoryComponent }
];

@NgModule({
  // 初始化路由器
   imports: [
    // CommonModule
    RouterModule.forRoot(routes)
   ],
   //declarations: [],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
