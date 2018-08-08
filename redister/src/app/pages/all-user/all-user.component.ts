import { DialogConfirmationComponent } from './../../common/dialog-confirmation/dialog-confirmation.component';
import { UserService } from './../../services/user.service';
import { UserInfoVo } from './../../vo/user-info.vo';
import { ApiResponse } from './../../dto/api-response';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: []
})
export class AllUserComponent implements OnInit {

  /* *******************************Instance Field***************************** */
  allUsers: Array<UserInfoVo>;
  displayedColumns: string[] = ['fName', 'lName', 'cell', 'email', 'action'];
  dataSource: MatTableDataSource<UserInfoVo>;
  isEditCall = false;
  userToEdit: UserInfoVo;

  /* *******************************Constructors***************************** */
  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  /* *******************************Public Methods***************************** */
  ngOnInit() {
    this.userToEdit = <UserInfoVo>{};
    this._init();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public editUser(user: UserInfoVo) {
    this.isEditCall = true;
    // this.userToEdit = user;
  }

  public deleteUser(_id: string) {
    let dialogRef = this.dialog.open(DialogConfirmationComponent, {
      width: '250px',
      data: { key: _id }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._deleteUser(result.key);
      }
    });
  }

  /* *******************************Private Methods***************************** */
  private _init() {
    if (null != this._setAccess()) {
      this.userToEdit = this._setAccess();
    }
    this.userService.getRegisterUsers().subscribe((apiResponse: ApiResponse<Array<UserInfoVo>>) => {
      console.log('xxxxxxxx xxxxxxxx xxxxxxxx response is ', apiResponse.body);
      this.allUsers = apiResponse.body;
      if (this.allUsers) {
        this.dataSource = new MatTableDataSource(this.allUsers);
      }
    });
  }

  private _deleteRow(_id: string) {
    this.allUsers.forEach((value, index) => {
      if (value._id == _id) {
        this.allUsers.splice(index, 1);
        return;
      }
    });
  }

  private _setAccess(): UserInfoVo {
    let user = JSON.parse(localStorage.getItem('current-user'));
    console.log('xxxxxxx xxxxxxxxxxxxx xxxxxxxxx logged user is ', user);
    return user;
  }

  private _deleteUser(_id: string) {
    console.log('xxxx xxxx xxxxx xxx id is ', _id);
    this.userService.deleteUser(_id).subscribe(() => {
      this._deleteRow(_id);
      this.dataSource = new MatTableDataSource(this.allUsers);
    });
  }


}
