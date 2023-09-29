import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DateRange } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { trigger, state, style, animate, transition } from '@angular/animations'; // Importa las animaciones

import { FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';




import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
  standalone: true,
  imports: [CommonModule, 
    FormsModule, 
    IonicModule, MatSliderModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule],
  animations: [ // Agrega las animaciones aquí
    trigger('vibrate', [
      state('vibrating', style({ transform: 'translateX(5px)' })),
      state('not-vibrating', style({ transform: 'translateX(0)' })),
      transition('not-vibrating => vibrating', animate('10s ease-in')),
      transition('vibrating => not-vibrating', animate('10s ease-out'))
    ])],
   
})
export class MisDatosComponent{
  usuario: any = {
    nivelEducacional: null,
  };
  inputVibrationState: 'vibrating' | 'not-vibrating' = 'not-vibrating';


  vibrateInputs() {
    this.inputVibrationState = 'vibrating';
    setTimeout(() => {
      this.inputVibrationState = 'not-vibrating';
    }, 200);
  }
  mostrarInfoUsuario: boolean = false;
  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  async mostrarInformacion() {
    if (!this.usuario.nombre || !this.usuario.apellido) {
      const alert = await this.alertController.create({
        header: 'Información incompleta',
        message: 'Por favor, ingrese tanto el nombre como el apellido.',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    const nivelEducacional = this.usuario.nivelEducacional || 'No especificado';

    const alert = await this.alertController.create({
      header: 'Información del Usuario',
      message: `Su nombre de usuario es ${this.usuario.nombre} ${this.usuario.apellido} .`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  limpiarCampos() {
    this.usuario = {
      nivelEducacional: null,
    };
    this.cambiarColorToolbar();
    this.vibrateInputs(); // Activa la animación de vibración
  }

  cambiarColorToolbar() {
    const toolbar = document.querySelector('ion-toolbar');
    if (toolbar) {
      toolbar.classList.remove('color-change-animation', 'primary-toolbar', 'danger-toolbar');
      setTimeout(() => {
        const currentColor = toolbar.classList.contains('primary-toolbar') ? 'primary' : 'danger';
        toolbar.classList.add('color-change-animation', `${currentColor}-toolbar`);
      }, 10);
    }
  }

  mostrarCalendario() {
    this.mostrarInfoUsuario = true;
  }
}



