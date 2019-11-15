import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros'
import { Heros } from '../heros'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Heros
  onSelect(hero: Heros): void {
    this.selectedHero = hero;
  }
  constructor() { 
  }

  ngOnInit() {
  }

}
