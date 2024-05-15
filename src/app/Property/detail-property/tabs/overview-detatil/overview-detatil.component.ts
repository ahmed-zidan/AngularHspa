import { Component, Input } from '@angular/core';
import { Property } from '../../../../Models/property-model';

@Component({
  selector: 'app-overview-detatil',
  standalone: true,
  imports: [],
  templateUrl: './overview-detatil.component.html',
  styleUrl: './overview-detatil.component.css'
})
export class OverviewDetatilComponent {
  @Input() property:Property = new Property();


}
