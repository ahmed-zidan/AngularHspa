import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../Models/property-model';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  properties:Property[] = [];
  property:Property = new Property();
  houses:Array<string> = ['House','Apartment','Dublex']
  furnishes:Array<string> = ['Fulli','Simi','UnFurnish']
  moves:string[] = ['east' , 'west' , 'south' , 'north']


  constructor(private http:HttpClient) {
    if(this.properties.length <=0){
      this.getProperties();
    }
  }
  getProperties(){
    this.http.get('Data/Properties.json').subscribe({
      next:res=>{
        this.properties = res as Property[];

      },
      error:err=>{
        console.log(err);
      }
    })

  }
  getPropertiesSub(){
    return this.http.get('Data/Properties.json');
  }
  getRentProperties(){
    this.http.get('Data/Properties.json').subscribe({
      next:res=>{
        this.properties = ((res as Property[]).filter(x=>x.SellRent==2));
        let props = JSON.parse(localStorage.getItem('props') as string) as Property[];
        props = props.filter(x=>x.SellRent == 2);
        if(props != undefined)
        for(let i = 0;i<props.length;i++){
          this.properties.push(props[i]);
        }
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  getBuyProperties(){
    this.http.get('Data/Properties.json').subscribe({
      next:res=>{
        this.properties = ((res as Property[]).filter(x=>x.SellRent==1));
        let props = JSON.parse(localStorage.getItem('props') as string) as Property[];
        props = props.filter(x=>x.SellRent == 1);
        if(props != undefined)
        for(let i = 0;i<props.length;i++){
          this.properties.push(props[i]);
        }
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  getProperyById(id : Number){
    return this.http.get('Data/Properties.json');
  }

  AddNewProperty():boolean{

    //this.properties.push(this.property);
    let data = JSON.parse(localStorage.getItem('props') as string) as Property[];
    this.asignNewId(data,this.property);
    if(data == undefined){
      data = []
      data.push(this.property);
      localStorage.setItem('props',JSON.stringify(data));

    }else{
      data.push(this.property);
      localStorage.removeItem('props');
      localStorage.setItem('props',JSON.stringify(data));

    }
    return true;
  }

  async asignNewId(props: Property[],property: Property) {
    props = props.sort(x=>x.id);
    let mx1 = props[props.length-1].id +1;
    this.properties = this.properties.sort(x=>x.id);
    let mx2 = this.properties[this.properties.length-1].id + 1;

    property.id = mx1>mx2?mx1:mx2;
    localStorage.removeItem('id');
    localStorage.setItem('id' , JSON.stringify(property.id));

  }
}


