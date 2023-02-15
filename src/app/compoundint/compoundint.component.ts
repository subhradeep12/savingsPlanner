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
  incrrate = 0.0
  invamt = 0;
  np = ""
  principal = 0
  intrate = 0
  abc = false
  outputamt = ""
  outputroi = ""
  outputyoing = ""

  onClick(ii: any, mi: any, roi: any, yoing: any, yoiment: any,rateincr: any)
  {
    if(ii != "")
    {
      this.init = parseFloat(ii)
      this.outputamt = ""
    }
    if(ii == "")
    {
      this.init = 0
    }
    if(mi != "")
    {
      this.month = parseFloat(mi)
      this.outputamt = ""
    }
    if(mi == "")
    {
      this.month = 0
    }
    if(mi == "" && ii =="")
    {
      this.outputamt = "Both inital investment and Monthly investment cannot be left blank"
    }
    if(parseFloat(mi) == 0.0 && parseFloat(ii) == 0.0)
    {
      this.outputamt = "Both inital investment and Monthly investment cannot be zero"
    }
    if(roi != "")
    {
      this.rate = parseFloat(roi)
      this.outputroi = ""
    }
    if(roi == "")
    {
      this.outputroi = "Please Enter a viable rate of interest"
    }
    if(parseFloat(roi) == 0.0)
    {
      this.outputroi = "Rate of interest cannot be zero"
    }
    if(yoing != "")
    {
      this.inving = parseInt(yoing)
      this.outputyoing = ""
    }
    if(yoing == "")
    {
      this.outputyoing = "Please enter the years of investing"
    }
    if(parseInt(yoing) == 0)
    {
      this.outputyoing = "Years of Investing cannot be zero"
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
    if(rateincr != "")
    {
      this.incrrate = parseFloat(rateincr)
    }
    if(rateincr == "")
    {
      this.incrrate = 0.0
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
    if(this.outputamt == "" && this.outputroi == "" && this.outputyoing == "")
    {
      this.abc = true
    }
    this.invamt = this.init
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
      
      this.invamt = this.invamt + 12* this.month
      this.principal = this.principal + (this.month*12)
      this.interest()
      this.increase()
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
  increase()
  {
    this.month = this.month + (this.month*this.incrrate/100)
  }
  onClose()
  {
    this.abc = false
  }
}


