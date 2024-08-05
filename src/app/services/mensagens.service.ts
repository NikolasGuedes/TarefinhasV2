import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  message: string = '';

  constructor() { }

  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 3500)
  }

  clear() {
    this.message = '';
  }
}
