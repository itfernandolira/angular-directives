import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Only for directives demo only! With pipes we will filter arrays!
  //We can´t have two directives inside (like an if inside a for)
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;
  showAll = false;
  showAllText = "Hide all numbers";
  defaultValue = 1;

  onChangeShowAll() {
    this.showAll = !this.showAll;
    if (this.showAll)
      this.showAllText = "Show all numbers";
    else
      this.showAllText = "Hide all numbers";
  }
}
