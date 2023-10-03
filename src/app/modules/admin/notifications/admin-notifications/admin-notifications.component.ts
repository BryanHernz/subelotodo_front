import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminNotificationsMarkReadComponent } from '../admin-notifications-mark-read/admin-notifications-mark-read.component';
import { AdminNotificationsSeeMoreComponent } from '../admin-notifications-see-more/admin-notifications-see-more.component';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent {
  notifications:string[] = ['Hace 10 min ','Hace 45 min ','Hace 1 Horas 10 min','Hace 1 Horas 30 min','Hace 1 Hora 45 min','Hace 2 Horas'] 

  constructor(private dialog: MatDialog) {}

  openReadDialog() {
    const dialogRef = this.dialog.open(AdminNotificationsMarkReadComponent);
  }  


  openSeeMoreDialog() {
    const dialogRef = this.dialog.open(AdminNotificationsSeeMoreComponent);
  }

}
