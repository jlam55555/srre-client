import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  constructor(private pageService: PageService) { }

  public isSignedIn: boolean = false;

  ngOnInit() {
    this.pageService.setPageTitle('Volunteer');
    this.pageService.getIsSignedIn().subscribe(newIsSignedIn => this.isSignedIn = newIsSignedIn);
  }

}
