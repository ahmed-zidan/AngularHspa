import { Component, Input } from '@angular/core';
import { PropertyServiceService } from '../../../Services/property-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-property-view',
  standalone: true,
  imports: [HttpClientModule],
  providers:[PropertyServiceService],
  templateUrl: './property-view.component.html',
  styleUrl: './property-view.component.css'
})
export class PropertyViewComponent {
  @Input() serv: any;
  constructor(){

  }
}
