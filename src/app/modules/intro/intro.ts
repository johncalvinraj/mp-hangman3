import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss'
})
export class Intro {
  constructor(protected router: Router) {}

  navigateToSinglePlayer() {
    this.router.navigate(['/single']);
  }

  navigateToMultiPlayer() {
    this.router.navigate(['/multi']);
  }
}
