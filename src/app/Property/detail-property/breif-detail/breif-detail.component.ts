import { Component, Input } from '@angular/core';
import { Property } from '../../../Models/property-model';

@Component({
  selector: 'app-breif-detail',
  standalone: true,
  imports: [],
  templateUrl: './breif-detail.component.html',
  styleUrl: './breif-detail.component.css'
})
export class BreifDetailComponent {
@Input() myProperty : Property = new Property();
}
