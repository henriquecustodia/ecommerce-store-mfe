import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { AsyncPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, SlicePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productsService = inject(ProductsService);

  productsService$ = this.productsService.getProducts();

}
