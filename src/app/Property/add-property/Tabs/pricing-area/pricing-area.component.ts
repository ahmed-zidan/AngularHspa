import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pricing-area',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pricing-area.component.html',
  styleUrl: './pricing-area.component.css'
})
export class PricingAreaComponent {
  @Input() serv:any;
}
