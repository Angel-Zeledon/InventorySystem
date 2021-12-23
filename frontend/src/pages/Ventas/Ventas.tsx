import React, { useEffect, useState } from 'react'
import './Ventas.css'

interface Props {
    metodo: (elemento:any)=>void
    senal : boolean
}

export const Ventas = () => {

    const [senal,setSenal] = useState(false)
    const [columnas, setColumnas] = useState([1]);
    const [datos, setDatos] = useState<any>([]);


    const Save = (elemento:any):void => {
        setDatos([...datos, elemento]);
    }

    const EnviarDatos = ():void => {
        setSenal(true);
        console.log(datos)
    }

    const AgregarColumna = () => {
        setColumnas([...columnas, 1]);
        console.log(columnas);
    }

    const BorrarColumna = () => {
        setColumnas(columnas.slice(0, -1));
        console.log(columnas);
    }

    return(
        <div className = "Pagina">
            <div className = "BarraLateral">
                <h4>Ventas</h4>
                <h4>Inventario</h4>
                <h4>Estadisticas</h4>
                <h4>Administrar</h4>
            </div>
            <div className = "Contenido">
                <div className = "Titulo">
                    <h1>Ventas</h1>
                </div>
                <div className = "AgregarProductos">
                    <p style={{width:'30%'}}>Producto</p>
                    <p>Mesa</p>
                    <p>Silla</p>
                    <p>Cantidad</p>
                    <p>Precio</p>
                </div>
              {
                columnas.map((item,index)=>{
                    return (
                        <Columna senal = {senal} metodo={Save} /> 
                    );
                })
              }
               <div className = "Botones">
                   <div className = "BorrarBoton">
                       <button onClick = {BorrarColumna} style={{backgroundColor:'red'}}> <span className="material-icons-outlined">add</span></button>
                   </div>
                   <div className = "FuncionesBoton">
                       <div>
                         <button onClick = {AgregarColumna}  style={{backgroundColor:'blue'}}> <span className="material-icons-outlined">add</span></button>
                       </div>
                       <div>
                         <button onClick = {EnviarDatos} style={{backgroundColor:'green'}}> <span className="material-icons-outlined">add</span></button>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

const Columna = ({metodo,senal}:Props)=>{

    const [value, setValue] = useState({mesa:0, silla:0, cantidad: 0, nombre :''});
    const productos = ["Ventas", "Administrar", "Inventario", "Estadisticas"];
    const mesas = [1,2,3,4];
    const sillas = [1,2,3,4];
    const cantidades = [1,2,3,4,5,6,7,8,9];

    const SelectProducto = (event:any) => {
        setValue({...value, nombre: event.target.value});
    }
    const SelectMesa = (event:any) => {
        setValue({...value, mesa: event.target.value});
    }
    const SelectSilla = (event:any) => {
        setValue({...value, silla: event.target.value});
    }
    const SelectCantidad = (event:any) => {
        setValue({...value, cantidad: event.target.value});
    }

    useEffect(()=>{
        if(senal){
            metodo(value);
        }
    },[])

    return (
        <div className = "AgregarProducto">
          <div className = "ProductoSelect" style = {{width:'30%'}}>
            <select style={{width:'80%'}} onChange = {SelectProducto}>
                {
                    productos.map((item,index)=>{
                        return(
                            <option value={item}>{ item }</option>
                        )
                    })
                }
            </select>
          </div>
          <div className = "MesaSelect">
              <select onChange = {SelectMesa}>
                  {
                      mesas.map((item,index)=>{
                          return(
                                <option value={item}>{ item }</option>
                          )
                      })
                  }
              </select>
          </div>
           <div className = "SillaSelect">
              <select onChange = {SelectSilla}>
                  {
                      sillas.map((item,index)=>{
                          return(
                                <option value={item}>{ item }</option>
                          )
                      })
                  }
              </select>
          </div>
          <div className = "CantidadSelect">
              <select onChange = {SelectCantidad}>
                  {
                      cantidades.map((item,index)=>{
                          return(
                                <option value={item}>{ item }</option>
                          )
                      })
                  }
              </select>
          </div>
          <div>
              $4000
          </div>
    </div>
    )
}