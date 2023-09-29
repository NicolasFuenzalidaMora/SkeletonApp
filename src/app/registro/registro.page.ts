import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioregistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController
  ) {
    this.formularioregistro = this.fb.group({
      nombre: new FormControl('', Validators.required),
      contraseña: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ]),
      confirmarcontraseña: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async guardar() {
    const f = this.formularioregistro.value;
    const contraseña = f.contraseña;
    const confirmarcontraseña = f.confirmarcontraseña;

    if (this.formularioregistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Se debe llenar todos los campos y/o su contraseña es invalida debe ser entre 4 y 8 caracteres',
        buttons: ['Ok'],
      });

      await alert.present();
      return;
    }

    console.log('Contraseña:', contraseña); // Agrega esto para verificar el valor de la contraseña
    if (contraseña.length < 4) {
      const alert = await this.alertController.create({
        header: 'Contraseña inválida',
        message: 'La contraseña debe tener al menos 4 caracteres.',
        buttons: ['Ok'],
      });
    
      await alert.present();
      return;
    }
    

    if (contraseña !== confirmarcontraseña) {
      const alert = await this.alertController.create({
        header: 'Contraseñas no coinciden',
        message: 'La contraseña y la confirmación de contraseña no coinciden.',
        buttons: ['Ok'],
      });

      await alert.present();
      return;
    }

    const usuario = {
      nombre: f.nombre,
      contraseña: f.contraseña,
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    const successAlert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: '¡El registro ha sido exitoso!',
      buttons: ['Ok'],
    });

    await successAlert.present();
  }
}
