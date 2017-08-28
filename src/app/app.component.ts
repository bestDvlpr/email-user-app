import {Component, OnInit} from '@angular/core';
import {CountSendService} from './services/count-send.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private countService: CountSendService) {
  }

  ngOnInit() {
    this.countService.sendCount('count1').subscribe((e) => {
      console.log(e.json());
    });
  }
}
