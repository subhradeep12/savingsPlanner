import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  constructor(private router: Router){}
 num = 0
  onHover(n: number)
  {
    this.num = n;
  }
  out()
  {
    this.num = 0
  }

  onClickCompInt()
  {
    this.router.navigate(["/comp-int"])
  }
  onClickTax()
  {
    this.router.navigate(["/tax"])
  }
  onClickRate()
  {
    this.router.navigate(["/rate"])
  }
  onClickTarget()
  {
    this.router.navigate(["/target"])
  }
}
