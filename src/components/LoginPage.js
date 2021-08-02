/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    Button,
    FormGroup,
    Input,
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
  } from "reactstrap";

import { login } from '../actions/auth';
import {store} from '../store/store';

export const LoginPage = () => {

//use de history
const history = useHistory();
//extraemos el state
const { auth } = store.getState();

/* 
Nota: //No dejes vacios los state o van a sacar error, 
si es una cadena vacioa, debes poner ''. 
Es decir, si pones esto saca error: seState(); 
*/
const [usuario, setUsuario] = useState(''); 
const [password, setPassword] = useState('');
const [openError, setOpenError] = useState(false);
const [cargando, setCargando] = useState(true);

//dispatch para almacenar cosas en el store de redux
const dispatch = useDispatch();

const handleClickLogin = (e) => {

    console.log('handleClickLogin');

    e.preventDefault();

    // loginUsuarioAdmin (
    //     {
    //         usuario: usuario, 
    //         password: password
    //     }
    // ).then( (resp, err) => {
    //     if (resp !== undefined) //TODO: revisar aqui si se cumple condicion
    //     {
            //Hacemos el dispatch para guardar en el store
            //los datos de usuario.
            if (usuario === 'prueba' && password === 'prueba')
            {
                dispatch(
                    login(
                        '0',
                        'Esteban' //TODO: revisar como obtener el usuario para guardar en store
                    )
                )
                const { auth } = store.getState();
                console.log('usuario en LoginPage', auth.usuario);
                history.push('/adminsolicitudes');
            }
            else
            {
                handleClickOpenError();
            }
    // })
};

const handleClickOpenError = () => {
    setOpenError(true);
};

const handleCloseError = () => {
    setOpenError(false);
};

//Si el usuario ya esta autenticado, entonces lo manda a la pagina de inicio.
useEffect(
    () =>
    {
        console.log('entro al useeffetc de login');
        if(auth)
        {
            if(auth.usuario)
            {
                history.push('/adminsolicitudes');
            }
        }
        setCargando(false);
    }
, [auth]);


    return (
        
            <>
                {                
                    cargando
                    ?
                        /* 
                            Si esta cargando datos del servidor, no se va a mostrar nada.
                            Solo se mostrara algo hasta que haya terminado de consultar 
                            el servidor y pueda decidir si muestra la pagina o lo redirecciona 
                            a otro lugar.
                        */
                        null
                    :
                        <>
                            <div className="mx-auto m-5" style={{width:'400px'}}>        
                                <Row>
                                    <Col md="12">
                                    <Card className="p-5">
                                        <CardBody>
                                            <form 
                                                onSubmit={handleClickLogin}
                                            >
                                                <p className="h4 text-center mb-4">Inicia Sesión</p>
                                                <FormGroup >
                                                    <label className="letragris">Usuario</label>
                                                    
                                                    <Input
                                                        autoComplete="off"
                                                        autoFocus
                                                        margin="dense"
                                                        id="correo"
                                                        value = {usuario}
                                                        variant="outlined"
                                                        onChange={(e) =>
                                                            setUsuario(e.target.value)
                                                        }
                                                        onFocus={(e) => e.target.select()} 
                                                    />

                                                </FormGroup>
                                                <br />
                                                <FormGroup>
                                                    <label className="letragris">Password</label>
                                                    <Input
                                                        type="password"
                                                        autoComplete="off"
                                                        margin="dense"
                                                        id="password"
                                                        value = {password}
                                                        variant="outlined"
                                                        onChange={(e) =>
                                                            setPassword(e.target.value)
                                                        }
                                                        onFocus={(e) => e.target.select()} 
                                                    />
                                                </FormGroup>
                                                <div className="text-center mt-4">
                                                                            
                                                    <input 
                                                        type="submit"
                                                        className="btn btn-primario btn-block"
                                                        value="Ingresar"
                                                    />

                                                </div>
                                                <div className="text-center mt-4">                      
                                                    <a
                                                        href="/"
                                                        style={{
                                                        fontSize: '22px',
                                                        textDecoration: 'none',
                                                        color: 'rgb(21,76, 94)',
                                                        }}
                                                    >
                                                        <span> - Regresar a Litoral - </span> 
                                                    </a>
                                                </div>
                                            </form>
                                        </CardBody>
                                    </Card>
                                    </Col>
                                </Row>
                            </div>
                            <Dialog
                            open={openError}
                            onClose={handleCloseError}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Acceso denegado"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Acceso denegado, revisa tu usuario de acceso y contraseña, quizas estes ingresando algun dato erroneo. 
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseError} color="primary">
                                    Enterado
                                </Button>
                            </DialogActions>
                        </Dialog>
                        </>        
                            
                }
            </>
            
    );


};

export default LoginPage;