import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations'; // Importa las animaciones
import { IonicModule } from '@ionic/angular';
import {MatSliderModule} from '@angular/material/slider';
@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
  standalone: true,
  imports: [MatInputModule, 
            MatFormFieldModule, 
            MatSlideToggleModule, 
            MatDatepickerModule, 
            MatNativeDateModule,
            MatButtonModule,
            CommonModule, 
            FormsModule, 
            IonicModule,
            MatSliderModule
  ],
  animations: [ // Agrega las animaciones aquí
  trigger('vibrate', [
    state('vibrating', style({ transform: 'translateX(5px)' })),
    state('not-vibrating', style({ transform: 'translateX(0)' })),
    transition('not-vibrating => vibrating', animate('10s ease-in')),
    transition('vibrating => not-vibrating', animate('10s ease-out'))
  ])],
  
})
export class ExperienciaLaboralComponent {
  usuario: any = {};
    cargo: any = {

    }
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
      if (!this.usuario.empresa || !this.usuario.cargo) {
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
        message: `Su empresa es${this.usuario.empresa} y su cargo ${this.usuario.cargo} .`,
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  
    limpiarCampos() {
      this.usuario = {
        nivelEducacional: null,
        
      };
  
  
  
    }
  
  }
  
