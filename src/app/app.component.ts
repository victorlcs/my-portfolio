import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from './animations/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'Victor-Portfolio';

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }
}
