import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsSeeMoreComponent } from '../notifications-see-more/notifications-see-more.component';
import { NotificationsMarkReadComponent } from '../notifications-mark-read/notifications-mark-read.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications:string[] = ['Hace 10 min ','Hace 45 min ','Hace 1 Horas 10 min','Hace 1 Horas 30 min','Hace 1 Hora 45 min','Hace 2 Horas'] 

  constructor(private dialog: MatDialog) {}

  openReadDialog() {
    const dialogRef = this.dialog.open(NotificationsMarkReadComponent);
  }  


  openSeeMoreDialog() {
    const dialogRef = this.dialog.open(NotificationsSeeMoreComponent);
  }

}
