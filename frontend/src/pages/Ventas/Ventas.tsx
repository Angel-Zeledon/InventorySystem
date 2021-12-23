import React from 'react'
import './Ventas.css'

export const Ventas = () => {

    const datosPeticiones: any[] = [];

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
               <Columna/> 
               <div className = "Botones">
                   <div className = "BorrarBoton">
                       <button  style={{backgroundColor:'red'}}> <span className="material-icons-outlined">add</span></button>
                   </div>
                   <div className = "FuncionesBoton">
                       <div>
                         <button style={{backgroundColor:'blue'}}> <span className="material-icons-outlined">add</span></button>
                       </div>
                       <div>
                         <button  style={{backgroundColor:'green'}}> <span className="material-icons-outlined">add</span></button>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

const Columna = ()=>{

    const productos = ["Ventas", "Administrar", "Inventario", "Estadisticas"];
    const mesas = [1,2,3,4];
    const sillas = [1,2,3,4];
    const cantidades = [1,2,3,4,5,6,7,8,9];



    return (
        <div className = "AgregarProducto">
          <div className = "ProductoSelect" style = {{width:'30%'}}>
            <select style={{width:'80%'}}>
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
              <select>
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
              <select>
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
              <select>
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