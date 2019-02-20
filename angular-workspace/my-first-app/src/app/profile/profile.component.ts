import { Component, OnInit, Inject, DoCheck } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { log } from 'util';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, DoCheck {

  animal: string;
  name: string;
  user: any;
  constructor(public dialog: MatDialog, public _auth: AuthService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.user.name, email: this.user.email, _id: this.user._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
    this.user = JSON.parse(this._auth.getUser());
    console.log(this.user);


    // this._auth.updateUser()

  }

  ngDoCheck() {
    // this.user = JSON.parse(this._auth.getUser());
    // console.log("nannnnnnn",this.user.name);

  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit {
  user: any;
  userData: any = {}

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public _auth: AuthService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



  ngOnInit() {
    this.user = JSON.parse(this._auth.getUser());
    console.log(this.user);
  }

  saveData(id, name) {
    console.log("name is :S", name, id);
    this.userData.name = name;
    this._auth.updateUser(id, this.userData)
      .subscribe(
        res => {
          console.log(res);
          this._auth.changeData("hello")
        },
        err => {
          console.log(err);

        }
      )
  }

}