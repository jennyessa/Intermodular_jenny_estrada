// import { Component, OnInit } from '@angular/core';
// import { About } from '../../services/model/about/about';
// import { AboutService } from '../../services/about/about.service';




// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [],
//   templateUrl: './about.component.html',
//   styleUrl: './about.component.css'
// })
// export class AboutComponent implements OnInit {
//     // el tipo About se crea en el model
//    about:About| undefined;


//     constructor(
//        private aboutService: AboutService,
       
//      ){}

//   ngOnInit(){
//       console.log("entro on init")
//       this.aboutService.getAbout().subscribe(
//         (data: About| undefined) => {
//           console.log(data)
//             this.about = data;// lo que trae la var data se guarda en 
//             // articles viene de articles: Article[] | undefined;
//         });
//       }

// }
