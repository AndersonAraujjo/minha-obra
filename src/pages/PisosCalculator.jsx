import React, { useEffect, useState } from "react";

function PisosCalculator() {
    
  

    const[compAmbiente, setCompAmbiente] = useState();
    const[largAmbiente, setLargAmbiente] = useState();
    const[compPeca, setCompPeca] = useState();
    const[largPeca, setLargPeca] = useState();
    const[compPecaRodape, setCompPecaRodape] = useState();
    const[alturaPecaRodape, setAlturaPecaRodape] = useState();
    const[perimetro, setPerimetro] = useState();
    const[aberturas, setAberturas] = useState();
    const[alturaRodape, setAlturaRodape] = useState();
    const[resultado, setResultado] = useState(0);
    const[operacao, setOperacao] = useState("Área Retangular(10%)");
    const areaComodo = compAmbiente*largAmbiente
    const areaPiso = (compPeca*largPeca)/10000
    const rodape = Math.ceil((perimetro-aberturas)/(((compPecaRodape/alturaRodape))*alturaPecaRodape/100))


    const calcular = () => {
      if (operacao==="Área Retangular(10%)")
        return parseFloat(areaComodo*1.10);
      else if (operacao==="Área Trapezoidal(20%)")
        return parseFloat(areaComodo*1.20);
      else if (operacao==="Área com muitos recortes(30%)")
        return parseFloat(areaComodo*1.30);
    }

    useEffect(() => {
      setResultado(calcular());
    }, [compAmbiente,largAmbiente,compPeca,largPeca,operacao]);

    const peças = resultado/(areaPiso);
   

    

    return (

      

      <div className="flex flex-col">

        <div class="flex items-center w-full h-20 text-blue-900 bg-blue-900 fixed" >
          <h1 className="mx-auto font-rubik text-4xl text-white">Minha Obra</h1>
        </div>
        <div className="flex text-2xl text-blue-900 font-bold mt-32">
          <h1 className="mx-auto font-sans font-bold">Quantificação de Pisos</h1>
        </div>
        <div className="flex  flex-col text-base mt-12">
          <h1 className="mx-auto px-12 text-left text-blue-900 font-bold font-sans text-l ">Para calcular a quantidade de pisos primeiramente é necessário medir o comprimento e a largura do ambiente para fazer o input dos dados solicidados.
          </h1>
          <h1 className="mx-auto px-12 text-left text-blue-900 font-bold font-sans text-l ">Para encontrar as dimensões e metragem do piso consultar o vendedor ou identificar na própria caixa do material.
          </h1>
            
        </div>

        <div className="mx-auto px-12 flex flex-col text-blue-900 text-base font-sans mt-12">
          <h1 className="mx-auto font-bold ">Insira o comprimento e largura do ambiente em m:</h1>

            <div className="flex flex-col" >
              <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-2 font-bold "
              placeholder="Comprimento (m)"
              type="number"
              value={compAmbiente}
              onChange={(e) => setCompAmbiente(e.target.value)}
              
              />

              <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
              placeholder="Largura (m)"
              type="number"
              value={largAmbiente}
              onChange={(e) => setLargAmbiente(e.target.value)}
              />
            </div>
        
            <label>A área do ambiente é: {areaComodo.toFixed(2)}m²</label>
          
        </div>


        <div className="mx-auto text-blue-900 px-12 flex flex-col text-base font-sans mt-12">
          <h1 className="mx-auto font-bold ">Insira as dimensões do piso em centímetros</h1>

            <div className="flex flex-col ">
              <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
              placeholder="Comprimento (cm)"
              type="number"
              value={compPeca}
              onChange={(e) => setCompPeca(e.target.value)}
              />

              <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
              placeholder="Largura (cm)"
              type="number"
              value={largPeca}
              onChange={(e) => setLargPeca(e.target.value)}
              />
            </div>
        
            <label>A área do seu Piso é : {areaPiso.toFixed(2)}m²</label>
        </div>

        <div className="mx-auto px-12 flex flex-col text-center text-base font-sans mt-12 text-blue-900 ">
          <h1 className="mx-auto px-12 flex flex-col text-base font-sans font-bold">Porcentagem Perdas:</h1>
          
          <select onChange={(e) => setOperacao(e.target.value)}
          className="mx-auto my-1 px-2 text-blue-900 border border-blue-900 font-sans font-bold " >
            <option>Área Retangular(10%)</option>
            <option>Área Trapezoidal(20%)</option>
            <option>Área com muitos recortes(30%)</option>
          </select>
            <h1 className="mx-auto ">Selecione a opção considerando a geometria do ambiente:</h1>
            <h3 className="mx-auto">Quanto mais angulado e desproporcional for o ambiente, maior será a porcentagem de perdas.</h3>
          
        </div>

        <div className=" text-blue-900 mx-auto px-12 flex flex-col text-base font-sans font-bold mt-12">
          <label>Você utilizará: {resultado.toFixed(2)}m² de piso ou {Math.round(peças)} peças de piso. </label>
        </div>

        <div>
          <div className="flex text-2xl mt-20">
            <h1 className=" text-blue-900 mx-auto px-12 font-sans font-bold">Quantificação dos Rodapés</h1>
          </div>
          <div className="flex  flex-col text-base mt-12">
            <h1 className="mx-auto px-12 text-left text-blue-900 font-bold font-sans text-l ">Para calcular a quantidade de pisos necessários para execução do rodapé é necessário medir todo o perímetro do ambiente e descontar os comprimentos dos vãos onde não serão colocados rodapés.
            </h1>
            
          </div>
          

            <div className="mx-auto flex flex-col text-base font-sans mt-12 text-blue-900">              
                <div className="mx-auto flex flex-col font-bold">   
                <h1>Preencha os campos com as dimensões:</h1>

                <div className="flex flex-col ">
                  <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
                  placeholder="Perimetro (m)"
                  type="number"
                  value={perimetro}
                  onChange={(e) => setPerimetro(e.target.value)}
                  />
                  <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
                  placeholder="Aberturas (m)"
                  type="number"
                  value={aberturas}
                  onChange={(e) => setAberturas(e.target.value)}
                  />
                  <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
                  placeholder="Comprimento da Peça (cm)"
                  type="number"
                  value={compPecaRodape}
                  onChange={(e) => setCompPecaRodape(e.target.value)}
                  />
                  <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
                  placeholder="Altura da Peça (cm)"
                  type="number"
                  value={alturaPecaRodape}
                  onChange={(e) => setAlturaPecaRodape(e.target.value)}
                  />
                  <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
                  placeholder="Altura do Rodapé (cm)"
                  type="number"
                  value={alturaRodape}
                  onChange={(e) => setAlturaRodape(e.target.value)}
                  />
                </div>  
              </div>

              <h2 className="mx-auto px-12 text-left text-blue-900 font-sans text-l ">
              Fique atento, no campo acima devem ser inseridos os comprimentos de paredes e aberturas em metros, as dimensões da peça em centimetros e a altura do rodapé também é em centimetros.
              </h2>

              <div className="  text-blue-900 mx-auto px-12 flex flex-col text-base font-sans font-bold mb-12 mt-12">
                <label>Você utilizará: {(rodape*(compPecaRodape*alturaPecaRodape))/10000}m² ou {(rodape)} peças de piso para fazer o rodapé.</label>
              </div>
            </div>
            
        </div>
        

        </div>

        
         
      
    )
  }




export default PisosCalculator;
