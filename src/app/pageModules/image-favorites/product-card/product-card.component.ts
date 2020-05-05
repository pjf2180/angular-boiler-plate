import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/product.models';
import { IAdminProduct } from 'src/app/models/admin-product.models';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input('item') viewModel: IAdminProduct;
  @Output() onStockAdded: EventEmitter<{ productId: string, quantity: number }> = new EventEmitter<{ productId: string, quantity: number }>();
  colorHierarchy = ['primary', 'accent']
  constructor() { }

  ngOnInit() {
    console.log(this.viewModel)
  }
  getColor(i: number) {
    return i > 1 ? this.colorHierarchy[i] : ''
  }
  onAddStockClick(quantity: number) {
    const d = {
      productId: this.viewModel.id,
      quantity
    };
    this.onStockAdded.emit(d);
  }
  onDisableClick() {

  }

}
