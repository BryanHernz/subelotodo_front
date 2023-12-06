import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private dialogRef: MatDialogRef<LogoutComponent>, private router: Router,private api:ApiService){
  }
  
  close(): void {
    this.dialogRef.close(true);
  }

  logout():void{
    this.close();
    this.api.logout();
    localStorage.clear();
    this.router.navigate(['']).then(()=>
      {window.location.reload()})
  }
}
