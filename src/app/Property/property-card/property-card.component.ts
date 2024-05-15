import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Property } from '../../Models/property-model';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  @Input() property:Property = new Property();
  @Input() addProp:number = 0;
}
