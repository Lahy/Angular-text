import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// NgModel lives here
import { FormsModule } from '@angular/forms'; // 执行双向绑定


import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // 调用双向绑定
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
