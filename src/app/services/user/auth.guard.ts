import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginPage } from 'src/app/login/login.page';


interface Usuarios{

  nombre:string;
  contrasenia:string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  public autenticado!:boolean;

  private local!:Storage;

  constructor(private storage:Storage, private router:Router){

    this.init();

  }


  async init(){

    const storage=await this.storage['create']();

    this.local=storage;


  }


  async registrar(nombre:string,contrasenia:string):Promise<Boolean>{

    const usuarios=await this.local?.['get']("usuarios")||[];

    const existe=usuarios.find((user:Usuarios)=>user.nombre==nombre && user.contrasenia==contrasenia);

    if(existe){

      console.log("Usuario existe");

      return true;
    }else{

      const nuevo:Usuarios={nombre, contrasenia};

      usuarios.push(nuevo);

      await this.local['set']("usuarios",usuarios);

      console.log("Usuario registrado");

      return false;

    }

  }


  async login(nombreUsuario:string,contrasenia:string):Promise<Boolean>{

    const usuarios:Usuarios[]=(await this.local['get']("usuarios"))||[];

    const usu=usuarios.find((user:Usuarios)=>user.nombre===nombreUsuario && user.contrasenia===contrasenia);

    if(usu){

      this.autenticado=true;
    }

    this.autenticado=false;

    return false;

  }

  logout(){

    this.autenticado=false;

    this.router.navigate(["/inicio"]);
  }
  
}
