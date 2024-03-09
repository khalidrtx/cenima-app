import { Component ,inject,OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  private productsService = inject(ProductsService);
  baseUrl: string = 'http://localhost:8089/images/'; 

  movies:any=[];
   ngOnInit(): void{
    this.loadProducts();
  }

loadProducts(){
  this.productsService.getMovies().subscribe((movies:any)=>{
    this.movies=movies;
  });
  console.log(this.movies);
}
trackByFn(index: number, movie: Movie): number {
  return movie.id; 
}
}
