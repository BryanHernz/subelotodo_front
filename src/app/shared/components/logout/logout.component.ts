import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private dialogRef: MatDialogRef<LogoutComponent>, private router: Router){
  }
  
  close(): void {
    this.dialogRef.close(true);
  }

  logout():void{
    this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    });
  }
}
