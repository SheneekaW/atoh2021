import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <!-- <a (click)="toggleClass()" [ngClass]="{ 'currentPage' : isCurrentPage }" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
       <a (click)="toggleClassHeroes()" [ngClass]="{ 'currentPage' : isCurrentPageHeroes}" routerLink="/heroes" routerLinkActive="active">Heroes</a> -->
     <!-- <a (click)="toggleClass()" [ngClass]="{ 'currentPage' : isCurrentPage }" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a (click)="toggleClass()" [ngClass]="{ 'currentPage' : !isCurrentPage}" routerLink="/heroes" routerLinkActive="active">Heroes</a> -->
      <a routerLink="/dashboard" routerLinkActive="active currentPage">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active currentPage">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Tour of Heroes';
  // isCurrentPage:boolean = true
  // isCurrentPageHeroes:boolean = false

  // toggleClass(){
  //   this.isCurrentPage = !this.isCurrentPage
  //   console.log("this.isCurrentPage", this.isCurrentPage)
  // }

  // toggleClassHeroes(){
  //   this.isCurrentPageHeroes = !this.isCurrentPageHeroes
  //   console.log("this.isCurrentPageHeroes", this.isCurrentPageHeroes)
  // }
}
