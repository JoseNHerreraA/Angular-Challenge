import { Component, Input, OnInit } from '@angular/core';
import { Comic, Comics } from 'src/app/models/comics';
import { Comics_services } from 'src/app/services/comics_services';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() id!: string;

  comics!: any;
  constructor(private comics_services: Comics_services) {
  }
  ngOnInit(): void {
    debugger;
    this.comics_services.getComic(this.id).subscribe((resp: any) => {
      debugger;
      this.comics = resp;
    });
  }

}
