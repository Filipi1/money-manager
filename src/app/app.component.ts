import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService, private router: Router){}

  title = 'money-manager';

  toggle() {
    this.sidebarService.toggle(false);
    return false
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
