import React, { useEffect, useState} from 'react'
import axios from 'axios'
import "./Inventario.css"

export const Inventario = () => {

    const lista = [1,2,3,4,5,6,7,8,9];

    const [inventarioActual, setInventarioActual] = useState([]);
    const [inventarioAnterior, setInventarioAnterior] = useState([]);

    const instance = axios.create({
        baseURL: 'http://localhost:8000/api/inventario/',
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
      });

    useEffect(()=>{
       axios.get("http://localhost:8000/api/inventario/", 
        {
           withCredentials: false,
           headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
         }).then((res)=>{
             console.log(res.data)
         })
    }, [])

    return (
        <div className = "Pagina">
            <div className = "BarraLateral">
                <h4>Ventas</h4>
                <h4>Inventario</h4>
                <h4>Estadisticas</h4>
                <h4>Administrar</h4>
            </div>
            <div className = "Contenido">
               <div className = "Titulo">
                    <h1>Inventario</h1>
               </div>
            <div className = "InventarioTop">
                <div className = "ColumnasInventarios">
                   <div className = "AgregarInventario">
                      <p style = {{width: '65%'}}>Producto</p>
                      <p>Cantidad</p>
                   </div>
                   <div className = "InputsInventario">
                       <div className = "InventarioSelect" style = {{width:'70%'}}>
                           <select>
                               {
                                   lista.map((item, index) => {
                                        return (
                                            <option>{item}</option>
                                        );
                                   })
                               }
                           </select>
                       </div>
                       <div className = "InventarioSelect" style = {{width:'20%'}}>
                           <select>
                               {
                                   lista.map((item, index) => {
                                        return (
                                            <option>{item}</option>
                                        );
                                   })
                               }
                           </select>
                       </div>
                   </div>
                </div>
                <div className = "BotonesInventario">
                    <button>Agregar</button>
                    <button>Eliminar</button>
                </div>
                <button className="EliminarButton">Eliminar</button>
                <div className="InventarioText">
                    <div className="InventarioTextoTabla">
                        <h3>Ingresos de Inventario</h3>
                        <h3>Inventario Actual</h3>
                    </div>
                    <div className="InventarioPdf">
                        <a href="#"><h4>Descargar PDF</h4></a>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}