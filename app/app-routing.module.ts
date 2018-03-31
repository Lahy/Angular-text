import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', redirectTo: './story', pathMatch: 'full' },
  { path: 'storys', component: StoryComponent },
  { path: 'person', component: PersonComponent },

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
