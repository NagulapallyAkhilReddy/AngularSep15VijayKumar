import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Categories } from '../categories/categories';

@Component({
  selector: 'app-products',
  imports: [CommonModule,Categories],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

 allProducts: {
  productId: string;
  productName: string;
  category: string;
  price: string;
  brand: string;
  stock: string;
  description: string;
}[] = [];

constructor() {
  this.allProducts = [

    { productId: 'P101', productName: 'Laptop', category: 'Electronics', price: '80000', brand: 'Dell', stock: '25', description: '15-inch business laptop' },
    { productId: 'P102', productName: 'Mobile Phone', category: 'Electronics', price: '60000', brand: 'Samsung', stock: '40', description: 'Android flagship phone' },
    { productId: 'P103', productName: 'Headphones', category: 'Accessories', price: '5000', brand: 'Sony', stock: '60', description: 'Noise cancelling headphones' },
    { productId: 'P104', productName: 'Keyboard', category: 'Accessories', price: '3000', brand: 'Logitech', stock: '100', description: 'Mechanical keyboard' },

    { productId: 'P105', productName: 'Mouse', category: 'Accessories', price: '1500', brand: 'Logitech', stock: '150', description: 'Wireless mouse' },
    { productId: 'P106', productName: 'Smart Watch', category: 'Wearables', price: '25000', brand: 'Apple', stock: '30', description: 'Fitness tracking smartwatch' },
    { productId: 'P107', productName: 'Tablet', category: 'Electronics', price: '45000', brand: 'Apple', stock: '20', description: '10-inch tablet' },
    { productId: 'P108', productName: 'Monitor', category: 'Electronics', price: '20000', brand: 'LG', stock: '35', description: '27-inch LED monitor' }

  ];
}

getLatestProducts() {
  this.allProducts = [

    { productId: 'P101', productName: 'Laptop', category: 'Electronics', price: '80000', brand: 'Dell', stock: '25', description: '15-inch business laptop' },
    { productId: 'P102', productName: 'Mobile Phone', category: 'Electronics', price: '60000', brand: 'Samsung', stock: '40', description: 'Android flagship phone' },
    { productId: 'P103', productName: 'Headphones', category: 'Accessories', price: '5000', brand: 'Sony', stock: '60', description: 'Noise cancelling headphones' },
    { productId: 'P104', productName: 'Keyboard', category: 'Accessories', price: '3000', brand: 'Logitech', stock: '100', description: 'Mechanical keyboard' },

    { productId: 'P105', productName: 'Mouse', category: 'Accessories', price: '1500', brand: 'Logitech', stock: '150', description: 'Wireless mouse' },
    { productId: 'P106', productName: 'Smart Watch', category: 'Wearables', price: '25000', brand: 'Apple', stock: '30', description: 'Fitness tracking smartwatch' },
    { productId: 'P107', productName: 'Tablet', category: 'Electronics', price: '45000', brand: 'Apple', stock: '20', description: '10-inch tablet' },
    { productId: 'P108', productName: 'Monitor', category: 'Electronics', price: '20000', brand: 'LG', stock: '35', description: '27-inch LED monitor' },

    { productId: 'P109', productName: 'Printer', category: 'Electronics', price: '18000', brand: 'HP', stock: '15', description: 'Wireless printer' },
    { productId: 'P110', productName: 'Router', category: 'Networking', price: '7000', brand: 'TP-Link', stock: '50', description: 'Dual-band WiFi router' }

  ];

}

totalProductsCount():number{
  return this.allProducts.length; 
}
totalElectonicsCount():number{
  return this.allProducts.filter(product => product.category === 'Electronics').length;
}
totalAccessoriesCount():number{
  return this.allProducts.filter(product => product.category === 'Accessories').length;
}
totalWearablesCount():number{
  return this.allProducts.filter(product => product.category === 'Wearables').length;
}
totalNetworkingCount():number{
  return this.allProducts.filter(product => product.category === 'Networking').length;
}



}
