import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Comics_services } from 'src/app/services/comics_services';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  @Input() endpoint!: string;
  page: number | undefined;
  total_results: any;
  comics: any;

  constructor(private comic_services: Comics_services) { }

  ngOnInit(): void {
    debugger;
    this.getStories();
  }

  onPaginate(pageEvent: PageEvent) {
    debugger;
    this.page = pageEvent.pageIndex;
    this.getStories();
  }
  getStories() {
    debugger;
    this.comic_services.getStories(this.endpoint, this.page).subscribe((resp: any) => {
      debugger;
      this.total_results = resp.total;
      this.comics = resp.results;
    });
  }

}
