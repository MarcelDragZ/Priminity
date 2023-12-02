import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { PryazSharedMenuComponent } from '@priminity/pryaz/shared/menu';
import {
  ImageFilter,
  Solver,
  TeamMember,
} from '@priminity/shared/environments/classes';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, PryazSharedMenuComponent],
  selector: 'priminity-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pryaz';
  public router: Router = inject(Router);

  teamMember = new TeamMember();

  activeTeamMember$ = this.teamMember.syncValidTeamMember();

  constructor() {
    const r = 50;
    const g = 120;
    const b = 250;
    document.documentElement.style.setProperty(
      '--dynamic-color',
      `${r}, ${g}, ${b}`
    );
    this.imageColor(r, g, b);
  }

  imageColor(r: number, g: number, b: number) {
    const targetColor = new ImageFilter(r, g, b); // Ziel Farbe in RGB

    const solver = new Solver(targetColor);
    const solution = solver.solve();
    const cssFilter = solution.filter;

    if (solution.loss < 10) {
      const style = document.createElement('style');
      style.type = 'text/css';

      style.innerHTML = `.img-color { ${cssFilter} }`; //! works by creating child component classes
      document.head.appendChild(style);
    } else {
      this.imageColor(r, g, b);
      return;
    }
  }
}
