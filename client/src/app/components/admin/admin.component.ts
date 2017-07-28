import {Component, OnInit} from '@angular/core';
import {BoardService} from '../board/board.service';

@Component({
  selector: 'app-admin',
  template: `
    <div>

      <table class="table table-hover table-responsive table-striped">
        <tr>
          <th>Team</th>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Score</th>
        </tr>
        <tr *ngFor="let team of teams">
          <td><h3><b>{{team.name}}</b></h3></td>
          <td style="padding-top:32px;">{{team.p1}}</td>
          <td style="padding-top:32px;">{{team.p2}}</td>
          <td><h3 style="color: #ff7c3b;">{{team.score}}</h3></td>
          <td><button (click)="editTeam(team)">Edit</button> <button (click)="deleteTeam(team)">Delete</button><button (click)="addPoint(team)">add</button><button (click)="removePoint(team)">remove</button></td>
        </tr>
      </table>
      <ng-container *ngIf="loading">Loading ScoreBoard...</ng-container>
    </div>
  `
})
export class AdminComponent implements OnInit {
  teams: string;
  loading: boolean;
  constructor(private board: BoardService){

  }

  ngOnInit(){
    this.loading = true;
    this.getTeams();
  }

  getTeams(){
    setInterval(() => {
      this.board.getTeams()
        .subscribe(data => {
            this.teams = data;
            this.loading = false
          },
          error => {console.log(error)})
    }, 1000)

  }
  createTeam(){

  }
  editTeam(team){

  }
  deleteTeam(team){
    this.board.deleteTeam(team)
      .subscribe(data => console.log(data) )
  }

  addPoint(team){
    team['score']++;
  this.board.addPoint(team)
    .subscribe(data => console.log(data) )
  }

  removePoint(team){
    team['score']--;
    this.board.deletePoint(team)
      .subscribe(data => console.log(data) )
  }
}
