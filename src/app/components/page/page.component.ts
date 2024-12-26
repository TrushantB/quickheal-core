import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { User } from '../../../stories/user';


@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();
  
  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();

  doLogout() {
    this.user = null;
  }

  doLogin() {
    this.user = { name: 'Jane Doe' };
  }

  doCreateAccount() {
    this.user = { name: 'Jane Doe' };
  }
}
