import { Component, model } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ILink } from '../../Models/ILink';
import { Router, RouterLink,RouterOutlet } from '@angular/router';
import { BasicInfoComponent } from './Tabs/basic-info/basic-info.component';
import { AddressComponent } from './Tabs/address/address.component';
import { OtherComponent } from './Tabs/other/other.component';
import { PhotoComponent } from './Tabs/photo/photo.component';
import { PricingAreaComponent } from './Tabs/pricing-area/pricing-area.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { PropertyServiceService } from '../../Services/property-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { Toast, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [FormsModule,MatTabsModule,RouterLink,RouterOutlet,MatToolbarModule,BasicInfoComponent,AddressComponent,OtherComponent
    ,PhotoComponent,PricingAreaComponent,PropertyViewComponent,HttpClientModule,PropertyCardComponent
  ],
  providers:[PropertyServiceService],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {
  radioModel: any;

  selected = 0;
  constructor(public serv:PropertyServiceService,public toust:ToastrService,public route:Router){

  }
  change(idx:any){
    this.selected = idx;
  }
  NextTab(){
    this.selected =(this.selected+1)%5;
  }
  Submit(){
   let res =  this.serv.AddNewProperty();
    if(res == true){
      this.toust.success('added','data added successfully');
      this.route.navigate(['/']);
    }
  }

}
