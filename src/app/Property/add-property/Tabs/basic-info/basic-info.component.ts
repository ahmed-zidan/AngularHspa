import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PropertyServiceService } from '../../../../Services/property-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [ButtonsModule,FormsModule,HttpClientModule],
  providers:[PropertyServiceService],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent {
  @Input() serv:any;
  constructor(){

  }

}
