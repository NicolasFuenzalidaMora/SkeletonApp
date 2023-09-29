import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { AlertController, IonicModule } from '@ionic/angular';
import { trigger, state, style, animate, transition } from '@angular/animations'; // Importa las animaciones
@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
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
 
  
})
export class CertificacionesComponent   {
  nombre: any = {};
    certificado: any = {
    };

  mostrarInfoUsuario: boolean = false;
  constructor(public alertController: AlertController) { }

  ngOnInit() {}
  async mostrarInformacion() {
    if (!this.nombre.certificado) {
      const alert = await this.alertController.create({
        header: 'Información incompleta',
        message: 'Por favor, ingrese todos los datos',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    const nivelEducacional = this.nombre.nivelEducacional || 'No especificado';

    const alert = await this.alertController.create({
      header: 'Información del Usuario',
      message: `Su certificado es${this.nombre.certificado}.`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  limpiarCampos() {
    this.nombre = {
      nivelEducacional: null,
      
    };



  }

}



