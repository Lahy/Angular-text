# Agular学习札记

## 所需搭建环境
* node
* git
## 环境搭建

1. 全局安装Angular Cli,新建文件夹Agular
```
  $cd Angular
  $npm install -g @angular/cli
```
2. 创建并进入新项目文件夹
```
  $ng new Text
  $cd Text
```
3. 启动项目
```
  ng serve --open
```
## 初识
1. 组件类文件: <br/>
  * app.component.ts——组件的类代码，TpeScript <br/>
  * app.component.html——组件的模板 <br/>
  * app.component.css——组件的**私有**CSS
2. 创建新的独立组件
```
  ng generate component story
```
&emsp;生成一个新的文件夹(story),并生成storyComponent的三个文件;
```
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-story', // 组件选择器(CSS元素选择器)
    templateUrl: './story.component.html',  // 组件模板文件位置
    styleUrls: ['./story.component.css']  // 组件私有CSS样式文件位置
  })
  export class StoryComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

  }
```
3. 添加story属性
&emsp;在story.component.ts中添加story属性:
```
  story = 'Lost Love';
```
4. 显示story
&emsp;在story.component.html中删除默认内容，改为story属性
```
  <p>{{story}}<p>
```
5. 显示story视图
&emsp;在app.component.html中增加：
```
  <h1>{{title}}</h1>
  <app-story></app-story>
```
6. 创建story类
&emsp;在src/app文件夹中为story类创建一个文件，并添加id和name
```
  export class story {
    id: number;
    name: string;
  }
```
&emsp;回到story.component.ts中:
```
  import { Component, OnInit } from '@angular/core';
  import { story } from '../story';  // 自动增加项

  @Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.css']
  })
  export class StoryComponent implements OnInit {

    // story = 'Lost Love';
    story: story = {   // 重新进行属性的定义
      id: 1,
      name: 'Lost Love'
    };

    constructor() { }

    ngOnInit() {
    }

  }
```
7. 显示story对象
&emsp;在story.component.html中增加:
```
  <div><span>id:</span>{{story.id}}</div>
  <div><span>name:</span>{{story.name}}</div>
```
8. 双向绑定
&emsp;在story.component.html中增加:
```
  <div>
    <label>
      name: 
      <input [(ngModel)]="story.name" placeholder="name">
    </label>
  </div>
```
&emsp;在app.module.ts中修改：
```
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  // NgModel lives here
  import { FormsModule } from '@angular/forms'; // 执行双向绑定


  import { AppComponent } from './app.component';
  import { StoryComponent } from './story/story.component';


  @NgModule({
    declarations: [
      AppComponent,
      StoryComponent
    ],
    imports: [
      BrowserModule,
      FormsModule // 调用双向绑定
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```
