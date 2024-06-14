import "./registro.css";
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";

const initialState = {
    nomusu:"",
    password:""
};


const Registro = () => {
    const [state, setState] = useState(initialState);
    const {nomusu, password} = state;

    const navigate = useNavigate();
    const{id} = useParams();

    useEffect(() => {
        if (id) {
            getSingleUser(id);
        }
    }, [id])

    const getSingleUser = async(id) => {
        const response = await axios.get(`http://localhost:3005/${id}`);
        if (response.status === 200) {
            setState({...response.data});
        }
    };

    const addUsu = async(data) => {
        try {
            const response = await axios.post("http://localhost:3005/", data);
            if (response.status === 200) {
                toast.success("Datos añadidos correctamente");
            }
        } catch (error) {
            toast.error("Error al añadir datos");
        }
    };

    const updateUser = async(data, id)=> {
        try{
        const response = await axios.put(`http://localhost:3005/${id}`, data);
        if (response.status === 200) {
            toast.success("Datos modificados correctamente");
        }
        }   catch (error) {
        toast.error("Error al modificar los datos")
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nomusu || !password) {
            toast.error("Debes rellenar todos los campos");
        } else {
            if (!id) {
                addUsu(state);
            } else {
               updateUser(state, id);
            }
            setTimeout(()=> navigate("/"), 500);
        }
    };

    const handleInputChange = (e) => {
        const {name , value} = e.target;
        setState({...state, [name]: value});
    }


    return(
        <div style={{marginTop:"100px"}}>
            <form onSubmit={handleSubmit}
            style={{
                margin:"auto",
                padding:"15px",
                maxWidth:"400px",
                alignContent:"center"
            }}
            >

            <label htmlFor="nomusu">Usuario</label>
            <input
            type="text"
            id="nomusu"
            name="nomusu"
            placeholder="Usuario"
            onChange={handleInputChange}
            value={nomusu}
            />

            <label htmlFor="password">Contraseña</label>
            <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleInputChange}
            value={password}
            />

            <input type="submit" value={id ? "Modificar" : "Registrar"}/>

            </form>
        </div>
    );
}

export default Registro