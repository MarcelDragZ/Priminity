import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriminitySharedMenuComponent } from '@priminity/priminity/shared/menu';
import { PriminitySharedFooterComponent } from '@priminity/priminity/shared/footer';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    PriminitySharedMenuComponent,
    PriminitySharedFooterComponent,
  ],
  selector: 'priminity-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'priminity';
}
