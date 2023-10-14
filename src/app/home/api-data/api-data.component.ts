import { Component, OnInit } from '@angular/core';
import { ApiclientService } from 'src/app/apiclient.service';
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsMod

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss'],
  standalone: true,
  imports: [CommonModule, 
    IonicModule, FormsModule]
  
})
export class ApiDataComponent implements OnInit {
  user: any;
  users: any;
  posts: any;
  post: any = {
    id: null,
    title: "",
    body: "",
    userId: null
  };
  compareWith: any;

  constructor(private api: ApiclientService) {}

  ngOnInit() {
    this.getUsuarios();
    this.getPosts();
  }

  getUsuario(userId: number) {
    this.api.getUsuario(userId).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe((data) => {
      this.users = data;
    });
  }

  getPosts() {
    this.api.getPosts().subscribe((data) => {
      this.posts = data;
      this.posts.reverse();
    });
  }

  guardarPost() {
    if (this.post.userId == null) {
      if (this.user == undefined) {
        console.log("Seleccione un usuario");
        return;
      }
      this.post.userId = this.user.id;
      this.api.createPost(this.post).subscribe(
        () => {
          console.log("Creado Correctamente");
          this.getPosts();
        },
        (error) => {
          console.log("Error " + error);
        }
      );
    } else {
      this.api.updatePost(this.post.id, this.post).subscribe(
        () => {
          console.log("Actualzado Correctamente");
          this.getPosts();
        },
        (error) => {
          console.log("Error " + error);
        }
      );
    }
  }

  setPost(_post: any) {
    this.post = _post;
    this.getUsuario(_post.userId);
    this.compareWith = this.compareWithFn;
  }

  eliminarPost(_post: any) {
    console.log("eliminar");
    this.api.deletePost(_post.id).subscribe(
      (success) => {
        console.log("Eliminado correctamente");
        this.getPosts();
      },
      (error) => {
        console.log("Error " + error);
      }
    );
  }

  compareWithFn = (o1: any, o2: any) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };
}
