import { Component } from '@angular/core';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      name: 'roti',
      rate: 12,
      available: 108,
      imageUrl: 'https://openclipart.org/image/800px/221173'
    },
    {
      name: 'puri',
      rate: 17,
      available: 190,
      imageUrl: 'https://openclipart.org/image/800px/221173'
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
