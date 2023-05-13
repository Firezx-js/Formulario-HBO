const titulo = {
    template : `
        <div class="d-flex flex-row-reverse align-items-center justify-content-between">
            <img src="img/logo-hbo.png" alt="logo_hbo" width="60px" class="text-center">
            <h2 class="my-2 fw-bold">Regístrate</h2>
        </div>
    `
}

const chek = {
    template : `
            <div class="terminos">
                <label v-for="dato in chek">
                    <input type="checkbox" required>
                    {{dato.texto}}
                </label>
            </div>
    `,

    data(){
        return{
            chek : [
                {
                    "texto": "Acepto los términos y condiciones de uso.",
                },
                {
                    "texto" : "Confirmo que soy mayor de edad",
                }
            ]
        }
    }
}

const app = new Vue({
    el : "#app",

    components : {
        titulo, chek
    },

    methods : {
        nombreUpdate(){
            if(this.usuario.length){
            console.log('Usuario: '+ this.usuario)
              this.usuarioConfirmacion = true;
            }
            else if(!this.usuario.length){
                console.log('Usuario no registrado!')
                this.usuarioConfirmacion = false;
            }
        },

        correoUpdate(){
            if(this.correo.length){
                    console.log('Correo: '+ this.correo)
                    this.correoConfirmacion = true;
                }
                else if(!this.correo.length){
                    console.log('Correo no registrado!')
                    this.correoConfirmacion = false;
                }
        },

        contraseñaUpdate(){
            if(this.contraseña.length && this.contraseñaDos.length){
                this.contraseñaConfirmacion = true;
                this.contraseñaDosConfirmacion = true;
                if(this.contraseña==this.contraseñaDos){
                    console.log('Contraseñas iguales')
                    this.contraseñaIguales = true;
                }
                else{
                    this.contraseñaIguales = false;
                }
            }
            else{
                console.log('Ingrese la contraseña!')
                this.contraseñaConfirmacion = false;
                this.contraseñaDosConfirmacion = false;
            }
        },


        enviar(e){
            console.log("Formulario enviado");
            this.nombreUpdate();
            this.correoUpdate();
            this.contraseñaUpdate();
            if(this.usuarioConfirmacion===true&&this.correoConfirmacion===true&&this.contraseñaIguales===true){
                alert('Usuario creado correctamente')
            }
            else{
                e.preventDefault();
            }
        },


    },

    data(){
        return{
            usuario: "",
            correo: "",
            contraseña: "",
            contraseñaDos: "",
            usuarioConfirmacion: null,
            correoConfirmacion: null,
            contraseñaConfirmacion: null,
            contraseñaDosConfirmacion: null,
            contraseñaIguales: null,
        }
    } 
})
