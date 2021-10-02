import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleCalculator';

  num1='';
  num2='';
  result=0;
  firstN=0;
  secondN=0;

  getFirstVal(value:string){
    const num1 = parseInt(value);

    if (!isNaN(num1)) {
      this.firstN = num1;
      console.log(this.firstN)
    }
  }
  getSecondVal(value:string){
    const num2 = parseInt(value);
    if (!isNaN(num2)) {
      this.secondN = num2;
      console.log(this.secondN)
    }
  }

  addition(){
    this.result = this.firstN+this.secondN;
  }

  subtraction(){
    this.result = this.firstN-this.secondN;
  }

  multiplication(){
    this.result = this.firstN*this.secondN;
  }
  division(){
    this.result = this.firstN/this.secondN;
  }
}
