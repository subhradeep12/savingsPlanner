import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundint',
  templateUrl: './compoundint.component.html',
  styleUrls: ['./compoundint.component.css']
})
export class CompoundintComponent {
  init = 0.0
  month = 0.0
  rate = 0.0
  inving = 0
  invment = 0
  np = ""
  principal = 0
  intrate = 0
  abc = false

  onClick(ii: any, mi: any, roi: any, yoing: any, yoiment: any)
  {
    this.abc = true
    if(ii != "")
    {
      this.init = parseFloat(ii)
    }
    if(ii == "")
    {
      this.init = 0
    }
    if(mi != "")
    {
      this.month = parseFloat(mi)
    }
    if(mi == "")
    {
      this.month = 0
    }
    if(roi != "")
    {
      this.rate = parseFloat(roi)
    }
    if(roi == "")
    {
      this.rate = 0.0
    }
    if(yoing != "")
    {
      this.inving = parseInt(yoing)
    }
    if(yoing == "")
    {
      this.inving = 0
    }
    if(yoiment != "")
    {
      this.invment = parseInt(yoiment)
    }
    if(yoiment == "")
    {
      this.invment = this.inving
    }
    if(this.inving > this.invment)
    {
      this.np = "Total Years of Investment should be greater than or equal to Years of Investing"
      this.abc = false
    }
    if(this.inving <= this.invment)
    {
      this.np = ""
    }
    this.calc()
  }
  onChange(yoing: any)
  {
    this.inving = parseInt(yoing)
  }
  calc() {
    this.principal = this.init
    for(var i = 1; i <= this.inving; i++)
    {
      this.principal = this.principal + (this.month*12)
      this.interest()
    }
    if(this.inving < this.invment)
    {
      this.invment = this.invment - this.inving
      for(var i = 1; i <= this.invment; i++)
      {
        this.interest()
      }
    }
  }
  interest(){
    this.intrate = this.principal * this.rate / 100.0
    this.principal = this.principal + this.intrate
  }
}


