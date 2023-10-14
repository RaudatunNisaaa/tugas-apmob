import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  userList: any[] = [];
  constructor() {}

  ngOnInit() {
    this.userList = [
      { nama: 'Han Sohee', status: 'Add friend', img: "assets/sohee.jpg"},
      { nama: 'Go Younjung', status: 'Add friend', img: "assets/gyj.jpg"},
      { nama: 'Lee Dohyun', status: 'Accept', img: "assets/ldh.jpg"},
      { nama: 'Park Seojun', status: 'Unfriend', img: "assets/ojun.jpg"},
      { nama: 'Hyojoo', status: 'Unfriend', img: "assets/hhj.jpg"},
      { nama: 'Hyungsik', status: 'Add friend', img: "assets/phs.jpg"},
      { nama: 'sullyoon', status: 'Add friend', img: "assets/yoona.jpg"},
    ];
  }

}
