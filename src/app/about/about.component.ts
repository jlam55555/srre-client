import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.setPageTitle('About');

    // configure collapse indicators
    this.pageService.collapseIndicators();
  }

}
