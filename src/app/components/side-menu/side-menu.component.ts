import { Component, OnInit } from '@angular/core';
import { SidebarService, MenuGroup } from 'src/app/services/sidebar.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-reducer';
import { Observable } from 'rxjs';
import { selectIsAuth } from 'src/app/store/auth/selectors/auth.selectors';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  menuGroupVm: MenuGroup[];
  signedIn$: Observable<boolean>;

  constructor(public sideBarService: SidebarService, public store: Store<AppState>) {
    this.menuGroupVm = sideBarService.userMenu;
  }

  ngOnInit() {
    this.signedIn$ = this.store.select(selectIsAuth);
  }

}
