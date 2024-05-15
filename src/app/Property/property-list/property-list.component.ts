import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PropertyServiceService } from '../../Services/property-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from "../../pipes/filter.pipe";
import { SortPipe } from "../../pipes/sort.pipe";
import { Property } from '../../Models/property-model';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
@Component({
    selector: 'app-property-list',
    standalone: true,
    providers: [PropertyServiceService],
    templateUrl: './property-list.component.html',
    styleUrl: './property-list.component.css',
    imports: [PropertyCardComponent, HttpClientModule, FilterPipe, SortPipe,FormsModule,ButtonsModule]
})
export class PropertyListComponent implements OnInit {
  propertyList:Array<any>=[];
  distictCities :string[]= [];
  propertiesName :string[]= [];
  sortValue:string = '';
  filterValue:string = '';
  ascOrDesc : string = 'asc'
  constructor(public service:PropertyServiceService , public route:ActivatedRoute){

  }
  ngOnInit(): void {

    this.service.getPropertiesSub().subscribe({
      next:res=>{
        let data = JSON.parse(localStorage.getItem('props') as string) as Property[];
        this.distictCities = [...new Set((res as Property[]).map((element) => element.city)),
        ... new Set(data.map(el => el.city))];

      },
      error:err=>{
        console.log('error');
      }
    })

    this.propertiesName = Object.keys(this.service.property);

    if(this.route.snapshot.url.toString()){
      this.service.getRentProperties();
    }else{
      this.service.getBuyProperties();
    }

  }
  changeSort(val:string){
    if(val == 'None'){
      this.sortValue='';
    }else{
      this.sortValue = val;
    }
    console.log(val);
  }
  changeFlter(val:string){
    if(val == 'all'){
      this.filterValue='';
    }else{
      this.filterValue = val;
    }
    console.log(val);
  }

}
