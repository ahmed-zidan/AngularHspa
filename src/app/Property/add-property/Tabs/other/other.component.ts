import { Component, Input } from '@angular/core';
import { PropertyServiceService } from '../../../../Services/property-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [FormsModule , HttpClientModule,ButtonsModule,BsDatepickerModule],
  providers:[PropertyServiceService],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  @Input() serv:any;
  constructor(){

  }
}
