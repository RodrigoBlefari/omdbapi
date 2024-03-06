import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  show(message: string, color: string): void {
    const snackbar = document.createElement('div');
    snackbar.textContent = message;
    snackbar.style.backgroundColor = color;
    snackbar.style.color = '#fff';
    snackbar.style.position = 'fixed';
    snackbar.style.top = '0px';
    snackbar.style.left = '50%';
    snackbar.style.transform = 'translateX(-50%)';
    snackbar.style.padding = '10px 20px';
    snackbar.style.borderRadius = '4px';
    snackbar.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
    snackbar.style.transition = 'opacity 0.3s ease';
    snackbar.style.textAlign = 'center';
    snackbar.style.width = '100%';
    document.body.appendChild(snackbar);

    setTimeout(() => {
      snackbar.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(snackbar);
      }, 300);
    }, 5000);
  }
}
