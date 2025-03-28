// import { Injectable } from '@angular/core';
// import { Adapter } from '../../core/adapters/adapter';



// // Model About

// export class About {

//     constructor(
//     public mainTitle: string,
//     public title:string,
//     public text: string,
//     ) { }

// };

// @Injectable({
//     providedIn: 'root'
// })
// export class AboutAdapter implements Adapter<About> {

//     adapt(item: any): About {
        
//         return new About(
//             // voy extrarer las propiedades de JSON y se los paso a new article 
//             // Y devuelvo el obejto Article.
//             item.mainTitle,
//             item.title,
//             item.text,
//           );
//     }
// }
