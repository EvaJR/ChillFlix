import { Component, OnInit } from '@angular/core';
import { Genre} from '../../models/genre'

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {

  name = 'Angular';
  genres = Genre;

  constructor() { }

  ngOnInit() {
  }

}
