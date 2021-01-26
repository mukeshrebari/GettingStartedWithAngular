import { Component} from '@angular/core'
@Component({
  selector:'pm-products',
templateUrl:'./product-list.component.html'
})
export class ProductListComponent{
pageTitle: string ="Product List";
products: any[]=[
  {
name:"roti",
rate:12,
available:108
},{
  name:"puri",
  rate:17,
  available:190
  }
]
}
