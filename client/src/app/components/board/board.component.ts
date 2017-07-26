import {Component, OnInit} from '@angular/core';
import {BoardService} from './board.service';

@Component({
  selector: 'app-board',
  template: `
    <div>
      <h1>ScoreBoard</h1>
      {{teams | json}}
    </div>
  `
})
export class BoardComponent implements OnInit {
  teams: string;

  constructor(private board: BoardService){

  }

  ngOnInit(){
    this.getTeams();
  }

  getTeams(){
    this.board.getTeams()
      .subscribe(data => {
          this.teams = data;
          console.log(data);

        },
        error => {console.log(error)})
  }
}
