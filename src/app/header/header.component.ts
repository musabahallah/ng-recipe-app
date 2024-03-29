import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(
    private storgeData: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  sendData() {
    this.storgeData.storeRecipes().subscribe();
  }

  fetchData() {
    this.storgeData.fetchRecipes().subscribe();
  }

  onLogOut() {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
