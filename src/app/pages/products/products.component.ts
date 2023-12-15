import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  productsArray: any[] = []
  categories: any[] = []
  constructor(private productService: ProductsService){}

  ngOnInit(){
    this.loadProducts()
    this.loadCategory()
  }

  loadProducts(){
    this.productService.getAllProducts().subscribe((res: any) => {
      this.productsArray = res.data
    })
  }

  getAllProductsByCategory(id: number) {
    this.productService.getAllProductsByCategoryId(id).subscribe((res: any) => {
      this.productsArray = res.data
    })
  }

  loadCategory(){
    this.productService.getAllCategory().subscribe((res: any) => {
      this.categories = res.data
    })
  }
}
