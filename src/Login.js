import './css/login.css'
import house from './img/house.png'
let BotonEnlace = function(props){
    return(
        <a href={props.href} {...props}> {props.children} </a>
    )
};
let Label = function(props){
    return(
        <label {...props} htmlFor="" class="labels">{props.children}</label>
    )
};
let Input = function(props){
    return(
        <input type={props.type} {...props} />
    )
}
let Nav = function(){
    return(
        <nav>
            <div id="img">
                <img src={house} alt="houseimg" />
                <p>ImagenProducto</p>
            </div>
            <BotonEnlace href="#" id="menu-boton">Log In</BotonEnlace>
        </nav>
    )
}
function Login(){
    return(
        <div>
            <Nav></Nav>
            <main>
                <div id="formulario">
                    <form action="#">
                        <Label>Usuarios</Label>
                        <Input type="text"/>
                        <Label>Contraseña</Label>
                        <Input type="password"/>
                        <Input type="submit" value="Inicar Sesión"></Input>
                    </form>
                    <BotonEnlace id="formulario-pass-btn">¿Olvidaste tu contraseña?</BotonEnlace>
                    <div id="linea"> </div>
                    <BotonEnlace id="registro" href="#" >Registrarse</BotonEnlace>
                </div>
            </main>
        </div>
    )
}

export default Login