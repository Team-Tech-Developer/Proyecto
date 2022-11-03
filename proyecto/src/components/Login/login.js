import React from "react";

export const Login = () => {
    return (
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    <div class="titulo">Bienvenido(a)</div>
                    <form id="loginform">
                        <input type="text" name="usuario" placeholder="Usuario" required></input>                 
                        <input type="password" placeholder="Contraseña" name="password" required></input>
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                    </form>
                    <div class="pie-form">
                        <a href="#">¿Perdiste tu contraseña?</a>
                        <a href="#">¿No tienes Cuenta? Registrate</a>
                    </div>
                </div>
                <div class="inferior">
                    <a href="#">Volver</a>
                </div>
            </div>
        </div>
    )
}