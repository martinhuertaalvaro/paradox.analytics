import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async presentToast(
    title: string,
    message: string,
    type:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'medium'
      | 'dark' = 'primary',
    position: 'top' | 'middle' | 'bottom' = 'bottom',
  ) {
    const toast = await this.toastController.create({
      header: title.toUpperCase(),
      message: message,
      duration: 1500,
      position: position,
      color: type,
      buttons: [{ side: 'end', icon: 'close', role: 'cancel' }],
    });

    await toast.present();
  }
}
