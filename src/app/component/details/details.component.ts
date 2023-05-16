import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [],
})
export class DetailsComponent {
  id: any;
  constructor(myRoute: ActivatedRoute) {
    this.id = myRoute.snapshot.params['id'];
  }
}
