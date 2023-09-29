import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SeeMoreComponent } from '../see-more/see-more.component';

@Component({
  selector: 'app-seller-posts',
  templateUrl: './seller-posts.component.html',
  styleUrls: ['./seller-posts.component.css']
})
export class SellerPostsComponent {
  allChecked:boolean;
  checkedList:any;
  posts:any;

  constructor(private dialog: MatDialog) {
    this.posts = [
      {id:1,isSelected:false},
      {id:2,isSelected:false},
      {id:3,isSelected:false},
      {id:4,isSelected:false},
      {id:5,isSelected:false},
      {id:6,isSelected:false},
      {id:7,isSelected:false},
      {id:8,isSelected:false},
    ];
    this.allChecked=false;
    this.getCheckedItemList();
  }
  
  

  checkUncheckAll() {
    for (var item in this.posts) {
      this.posts[item].isSelected=this.allChecked;
    }
    this.getCheckedItemList();
  }

  checkChecked() {
    this.allChecked = this.posts.every(function(item:any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var item in this.posts) {
      if(this.posts[item].isSelected)
      this.checkedList.push(this.posts[item]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }


  openDialog() {
    const dialogRef = this.dialog.open(SeeMoreComponent);
  }

}
