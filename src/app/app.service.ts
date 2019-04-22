import {Injectable,Inject} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {
 private observable:Observable<any>;
 constructor(private http:Http){

 }
 getProductDetails(): Observable<any>{
    
     //this.observable = this.http.get(' https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json');
    this.observable = this.http.get('D:\Learnings\Assignment\quickstart\src\app\products.json');
     return this.observable;
 }
 getProductsJSON() {
     const data = {
    "id": "shop/new/all-new",
    "name": "All New",
    "categoryType": "subcat",
    "groups": [
        {
            "id": "wavy-jacquard-duvet-cover-shams-b2694",
            "name": "Organic  Wavy Jacquard Duvet Cover + Shams",
            "links": {
                "www": "https://www.westelm.com/products/wavy-jacquard-duvet-cover-shams-b2694/"
            },
            "priceRange": {
                "regular": {
                    "high": 199,
                    "low": 34
                },
                "selling": {
                    "high": 149,
                    "low": 25
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-1-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/wavy-jacquard-duvet-cover-shams-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                },
                {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "wavy-jacquard-duvet-cover-shams-b2694",
                "type": "GROUP_REVIEWS"
            }
        },
        {
            "id": "broken-lines-linen-cotton-duvet-cover-shams-b2689",
            "name": "Broken Lines Belgian Flax Linen Cotton Duvet Cover + Shams",
            "links": {
                "www": "https://www.westelm.com/products/broken-lines-linen-cotton-duvet-cover-shams-b2689/"
            },
            "priceRange": {
                "regular": {
                    "high": 199,
                    "low": 44
                },
                "selling": {
                    "high": 139,
                    "low": 30
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/broken-lines-belgian-flax-linen-cotton-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/broken-lines-belgian-flax-linen-cotton-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/broken-lines-linen-cotton-duvet-cover-shams-1-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/broken-lines-linen-cotton-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/broken-lines-linen-cotton-duvet-cover-shams-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [''],
            "messages": [
                "30% off Deeper Discount"
            ],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                },
                {
                    "bopisSuppress": false,
                    "rank": 9,
                    "id": "fairTrade"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "broken-lines-linen-cotton-duvet-cover-shams-b2689",
                "type": "GROUP_REVIEWS"
            }
        },
        {
            "id": "organic-crinkle-duvet-cover-shams-white-b2691",
            "name": "Organic Crinkle Duvet Cover + Shams - White",
            "links": {
                "www": "https://www.westelm.com/products/organic-crinkle-duvet-cover-shams-white-b2691/"
            },
            "priceRange": {
                "regular": {
                    "high": 159,
                    "low": 29
                },
                "selling": {
                    "high": 119,
                    "low": 21
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0032/organic-crinkle-duvet-cover-shams-white-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0032/organic-crinkle-duvet-cover-shams-white-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0028/organic-crinkle-duvet-cover-shams-white-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                },
                {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "organic-crinkle-duvet-cover-shams-white-b2691",
                "type": "GROUP_REVIEWS"
            }
        },
        {
            "id": "organic-crinkle-duvet-cover-shams-blue-bird-b2692",
            "name": "Organic Crinkle Duvet Cover + Shams - Blue Bird",
            "links": {
                "www": "https://www.westelm.com/products/organic-crinkle-duvet-cover-shams-blue-bird-b2692/"
            },
            "priceRange": {
                "regular": {
                    "high": 159,
                    "low": 29
                },
                "selling": {
                    "high": 119,
                    "low": 21
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0011/organic-crinkle-duvet-cover-shams-blue-bird-1-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0011/organic-crinkle-duvet-cover-shams-blue-bird-1-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201910/0011/organic-crinkle-duvet-cover-shams-blue-bird-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0015/organic-crinkle-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/organic-crinkle-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201913/0026/scribble-camo-poster-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                },
                {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "organic-crinkle-duvet-cover-shams-blue-bird-b2692",
                "type": "GROUP_REVIEWS"
            }
        },
        {
            "id": "roar-rabbit-overlapping-tiles-duvet-cover-shams-b2686",
            "name": "Roar + Rabbit&#8482; Overlapping Tiles Duvet Cover + Shams",
            "links": {
                "www": "https://www.westelm.com/products/roar-rabbit-overlapping-tiles-duvet-cover-shams-b2686/"
            },
            "priceRange": {
                "regular": {
                    "high": 229,
                    "low": 39
                },
                "selling": {
                    "high": 171,
                    "low": 29
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0008/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/roar-rabbit-overlapping-tiles-duvet-cover-shams-1-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/roar-rabbit-overlapping-tiles-duvet-cover-shams-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "roar-rabbit-overlapping-tiles-duvet-cover-shams-b2686",
                "type": "GROUP_REVIEWS"
            }
        },
        {
            "id": "wide-channel-seersucker-duvet-cover-shams-b2693",
            "name": "Wide Channel Seersucker Duvet Cover + Shams",
            "links": {
                "www": "https://www.westelm.com/products/wide-channel-seersucker-duvet-cover-shams-b2693/"
            },
            "priceRange": {
                "regular": {
                    "high": 159,
                    "low": 29
                },
                "selling": {
                    "high": 119,
                    "low": 21
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/wide-channel-seersucker-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/wide-channel-seersucker-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0034/wide-channel-seersucker-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0052/wide-channel-seersucker-duvet-cover-shams-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                },
                {
                    "bopisSuppress": false,
                    "rank": 9,
                    "id": "fairTrade"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "wide-channel-seersucker-duvet-cover-shams-b2693",
                "type": "GROUP_REVIEWS"
            }
        },
        {
            "id": "plaid-seersucker-duvet-cover-shams-b2688",
            "name": "Plaid Seersucker Duvet Cover + Shams",
            "links": {
                "www": "https://www.westelm.com/products/plaid-seersucker-duvet-cover-shams-b2688/"
            },
            "priceRange": {
                "regular": {
                    "high": 159,
                    "low": 29
                },
                "selling": {
                    "high": 119,
                    "low": 21
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/plaid-seersucker-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/plaid-seersucker-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0034/plaid-seersucker-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/plaid-seersucker-duvet-cover-shams-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                },
                {
                    "bopisSuppress": false,
                    "rank": 9,
                    "id": "fairTrade"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "plaid-seersucker-duvet-cover-shams-b2688",
                "type": "GROUP_REVIEWS"
            }
        },
        {
            "id": "organic-voile-duvet-cover-shams-b2706",
            "name": "Organic Voile Duvet Cover + Shams",
            "links": {
                "www": "https://www.westelm.com/products/organic-voile-duvet-cover-shams-b2706/"
            },
            "priceRange": {
                "regular": {
                    "high": 159,
                    "low": 29
                },
                "selling": {
                    "high": 119,
                    "low": 21
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-voile-duvet-cover-shams-1-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-voile-duvet-cover-shams-1-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-voile-duvet-cover-shams-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                },
                {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "organic-voile-duvet-cover-shams-b2706",
                "type": "GROUP_REVIEWS"
            }
        },
        {
            "id": "tencel-terrazzo-duvet-cover-shams-b2687",
            "name": "TENCEL&#8482; Terrazzo Duvet Cover + Shams",
            "links": {
                "www": "https://www.westelm.com/products/tencel-terrazzo-duvet-cover-shams-b2687/"
            },
            "priceRange": {
                "regular": {
                    "high": 159,
                    "low": 34
                },
                "selling": {
                    "high": 119,
                    "low": 25
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/tencel-terrazzo-duvet-cover-shams-1-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/tencel-terrazzo-duvet-cover-shams-1-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/tencel-terrazzo-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/tencel-terrazzo-duvet-cover-shams-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                },
                {
                    "bopisSuppress": false,
                    "rank": 8,
                    "id": "handmade"
                },
                {
                    "bopisSuppress": false,
                    "rank": 9,
                    "id": "fairTrade"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "tencel-terrazzo-duvet-cover-shams-b2687",
                "type": "GROUP_REVIEWS"
            }
        },
        {
            "id": "organic-sateen-asha-duvet-cover-shams-b2710",
            "name": "Organic Sateen Asha Duvet Cover + Shams",
            "links": {
                "www": "https://www.westelm.com/products/organic-sateen-asha-duvet-cover-shams-b2710/"
            },
            "priceRange": {
                "regular": {
                    "high": 159,
                    "low": 34
                },
                "selling": {
                    "high": 119,
                    "low": 25
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/organic-sateen-asha-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201916/0014/organic-sateen-asha-duvet-cover-shams-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201909/0033/organic-sateen-asha-duvet-cover-shams-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 3,
                    "id": "newcore"
                },
                {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                },
                {
                    "bopisSuppress": false,
                    "rank": 9,
                    "id": "fairTrade"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "organic-sateen-asha-duvet-cover-shams-b2710",
                "type": "GROUP_REVIEWS"
            }
        }
    ],
    "totalPages": 47,
    "categories": ['']
};


return data;
 }
}