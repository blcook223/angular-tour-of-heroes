import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  selector: 'my-app',
  providers: [ HeroService ],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

}
