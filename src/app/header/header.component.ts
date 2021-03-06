import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pageTitle;

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getPageTitle().subscribe(newPageTitle => this.pageTitle = newPageTitle);
    $('.nav-link').click(() => $('#mainNavbar').collapse('hide'));
  }

}
