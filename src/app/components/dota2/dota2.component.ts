import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dota2',
  templateUrl: './dota2.component.html',
  styleUrls: ['./dota2.component.css']
})
export class Dota2Component implements OnInit {

  private hero_name : string;
  private hero_type : string;
  private hero_skill:{
    skill1:string,
    skill2:string,
    skill3:string,
    skill4:string
  }


  constructor() { }

  ngOnInit() {
    this.hero_name = "Vengeful Spirit"
    this.hero_type = "Agi"
    this.hero_skill = {
      skill1:"Magic Missile",
      skill2:"Wave of Terror",
      skill3:"Vengeance Aura",
      skill4:"Nether Swap"
    }
  }

}
