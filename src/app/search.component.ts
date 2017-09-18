import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from './movies.service';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private moviesService: MoviesService){}
  ngOnInit() {
  }
  @Input() moviename: string;
  moviedata:any;


  load_moviedata():void{
    this.moviesService.get_data(this.moviename)
    .subscribe((res)=> {this.moviedata=res.json().results; 
      console.log(this.moviedata);}
    )}
}
