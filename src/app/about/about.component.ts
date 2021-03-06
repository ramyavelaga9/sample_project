import { Component, OnInit, Inject } from '@angular/core';
import {LeaderService} from '../services/leader.service';
import {Leader} from '../shared/leader';
import {flyInOut,expand} from '../animations/app.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations:[flyInOut(),expand()]
})
export class AboutComponent implements OnInit {

  Leaders:Leader[];
  errMsg:string;
  constructor(private leaderservice:LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
      this.leaderservice.getLeaders().subscribe((Leaders)=>this.Leaders=Leaders,
      errmess=>this.errMsg=<any>errmess);
  }

}
