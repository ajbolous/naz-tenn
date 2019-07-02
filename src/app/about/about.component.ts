import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  images_array: IImage[] = [

    { title: "Welcome!", caption: "Nazareth tennis welcomes you! ", url: "assets/images/banner.jpg" },
    { title: "Great partners", caption: "We have many partners and sponsors! ", url: "assets/images/head.jpg" },
    { title: "A home for everyone!", caption: "At Nazarreth tennis school every child is exceptional !", url: "assets/images/children.jpg" }
  ];

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() { }

}
