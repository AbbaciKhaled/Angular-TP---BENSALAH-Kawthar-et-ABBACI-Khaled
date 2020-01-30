import { Component, OnInit, Input } from '@angular/core';
import {DataButton} from '../../../model/exosSupplementaires/dataButton';
import { Button } from '../../../model/exosSupplementaires/button';

@Component({
  selector: 'app-afficher-text',
  templateUrl: './afficher-text.component.html',
  styleUrls: ['./afficher-text.component.scss']
})
export class AfficherTextComponent implements OnInit {

  @Input() text: Text = null;

  buttons: Button[];

  buttonAffiche : string = 'Aucun Boutton n\'est cliqué';

  constructor() { }


  ngOnInit() {
    this.buttons = DataButton.list;


  }

  maj($event){
    this.buttonAffiche = $event;
  }


}
