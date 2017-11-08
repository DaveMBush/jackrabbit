import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThankyouComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
