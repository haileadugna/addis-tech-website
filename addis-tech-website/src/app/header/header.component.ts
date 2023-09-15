import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuActive = false;
  searchActive = false; // Initial state is hidden
  isInputFocused = false; // Keep track of input focus
  searchQuery: any;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
    // If the input is active, keep it active
    if (this.searchActive) {
      this.isInputFocused = true;
    }
  }

  onFocus() {
    this.isInputFocused = true;
  }

  onBlur() {
    this.isInputFocused = false;
  }
}
