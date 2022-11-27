import { useEffect, useState } from "react";

function PisosCalculator() {
    
  

    const[nro1, setNro1] = useState("");
    const[nro2, setNro2] = useState("");
    const[nro3, setNro3] = useState("");
    const[nro4, setNro4] = useState("");
    const areaComodo = nro1*nro2
    const areaTotalPisoComodo = (areaComodo)*1.20


    const areaPiso = nro3*nro4
    const quantidadePiso = (areaComodo/(areaPiso/10000))*1.20
    

    return (

      <div className="flex flex-col">
        <div className="flex text-2xl font-bold mt-8">
          <h1 className="mx-auto">Quantificação de Pisos</h1>
        </div>

        <div className="mx-auto file:flex flex-col text-base font-sans font-bold mt-12">
          <h1>Insira o comprimento e largura do seu comodo em metros</h1>

            <div className="flex flex-col" >
              <input className=" border border-black border-spacing-1 font-bold"
              placeholder="Comprimento"
              type="number"
              value={nro1}
              onChange={(e) => setNro1(e.target.value)}
              />

              <input className=" border border-black border-spacing-1 font-bold"
              placeholder="Largura"
              type="number"
              value={nro2}
              onChange={(e) => setNro2(e.target.value)}
              />
            </div>
        
            <label>A área do seu comodo é : {areaComodo}m²</label>
          
        </div>


        <div className="mx-auto flex flex-col text-base font-sans font-bold mt-12">
          <h1>Insira o comprimento do piso em centimetros</h1>

            <div className="flex flex-col ">
              <input className=" border border-black border-spacing-1 font-bold"
              placeholder="Comprimento"
              type="number"
              value={nro3}
              onChange={(e) => setNro3(e.target.value)}
              />

              <input className=" border border-black border-spacing-1 font-bold"
              placeholder="Largura"
              type="number"
              value={nro4}
              onChange={(e) => setNro4(e.target.value)}
              />
            </div>
        
            <label>A área do seu Piso é : {areaPiso}cm²</label>
        </div>

               

        <div className="mx-auto flex flex-col text-base font-sans font-bold mt-12">
          <label>Devem ser comprado {areaTotalPisoComodo}m² de piso ou {Math.round(quantidadePiso)} peças </label>
        </div>

        </div>   
        
         
      
    )
  }




export default PisosCalculator;
