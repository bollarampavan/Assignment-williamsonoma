import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AppService} from './app.service';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'my-app',
  templateUrl: './dashboard.html',
})
export class AppComponent  { 
  name = 'Angular'; 
  showProduct:boolean= false;
  products:any;
  
  constructor(private route:ActivatedRoute, private router:Router, public appService:AppService){
    this.router = router;
    this.route = route;
  }

launch(){
  //this.router.navigate(['/productHome']);
  this.showProduct = true;
  /*const data = this.appService.getProductDetails();
  data.subscribe( (res: Response) => {
    console.log(res);
  });*/

   this.products = JSON.parse(JSON.stringify(this.appService.getProductsJSON()));
}

}
