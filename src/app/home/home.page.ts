import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedSegment: string = 'mis-datos';

  constructor(private router: Router) {}

  segmentChanged() {
    this.router.navigate(['home', this.selectedSegment]);
  }
}
