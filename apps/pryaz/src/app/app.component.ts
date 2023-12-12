import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { PryazSharedMenuComponent } from '@priminity/pryaz/shared/menu';
import {
  ImageFilter,
  Solver,
  TeamMember,
} from '@priminity/shared/environments/classes';
import { map } from 'rxjs';

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

  rgbColor: { r: number; g: number; b: number } = {
    r: 255,
    g: 0,
    b: 0,
  };

  activeTeamMember$ = this.teamMember.syncValidTeamMember().pipe(
    map((teamMember) => {
      this.getRgbColor(teamMember ? teamMember[1].colorScheme : '');
      document.documentElement.style.setProperty(
        '--dynamic-color',
        `${this.rgbColor.r}, ${this.rgbColor.g}, ${this.rgbColor.b}`
      );
      this.imageColor(this.rgbColor.r, this.rgbColor.g, this.rgbColor.b);
      return teamMember;
    })
  );

  getRgbColor(hexColor: string) {
    if (hexColor === '') {
      return;
    } else {
      this.rgbColor.r = parseInt(hexColor.substr(1, 2), 16);
      this.rgbColor.g = parseInt(hexColor.substr(3, 2), 16);
      this.rgbColor.b = parseInt(hexColor.substr(5, 2), 16);
    }
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
