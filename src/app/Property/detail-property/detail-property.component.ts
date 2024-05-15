import { Component, OnInit } from '@angular/core';
import { Property } from '../../Models/property-model';
import { PropertyServiceService } from '../../Services/property-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';
import { BreifDetailComponent } from './breif-detail/breif-detail.component';

import { MatTabsModule } from '@angular/material/tabs';
import { OverviewDetatilComponent } from './tabs/overview-detatil/overview-detatil.component';
import { AddressComponent } from '../add-property/Tabs/address/address.component';
import { ContactDetailComponent } from './tabs/contact-detail/contact-detail.component';
import { PhotosDetailComponent } from './tabs/photos-detail/photos-detail.component';
import { AddressDetailComponent } from './tabs/address-detail/address-detail.component';
@Component({
  selector: 'app-detail-property',
  standalone: true,
  imports: [ HttpClientModule,RouterLink , BreifDetailComponent,MatTabsModule,OverviewDetatilComponent,
    ContactDetailComponent,PhotosDetailComponent,AddressDetailComponent
  ],
  providers:[PropertyServiceService ],
  templateUrl: './detail-property.component.html',
  styleUrl: './detail-property.component.css'
})
export class DetailPropertyComponent implements OnInit {
  property:Property = new Property();
  id:number = 0;
  selectedIdx:Number = 0;
  constructor(public route:ActivatedRoute,public service:PropertyServiceService,private router:Router){

  }
  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params)=>{
        this.id = +params['id'];
      }
    )

    this.service.getProperyById(this.id).subscribe({
      next:res=>{
        this.service.properties = res as Property[];
        this.property =  this.service.properties.find(x=>x.id == this.id) as Property;
        console.log(this.property);
      },
      error:err=>{
        console.log(err);
      }
    });

  }

  Next(){
    this.id++;
    this.router.navigate(['property-detail',this.id]);

  }
  change(idx : Number){
    this.selectedIdx = idx;
  }

}
