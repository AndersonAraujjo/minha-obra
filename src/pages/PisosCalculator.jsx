import React, { useEffect, useState } from "react";
import retangulo from "../assets/retangulo.png";
import trianguloRetangulo from "../assets/trianguloRetangulo.png";
import trianguloIsocelis from "../assets/trianguloIsocelis.png";
import trapezio from "../assets/trapezio.png";
import diagonal from "../assets/diagonal.png";
import paralelo from "../assets/paralelo.png";

function PisosCalculator() {
    
  
    const[compAmbiente, setCompAmbiente] = useState();
    const[compAmbienteMenor, setCompAmbienteMenor] = useState();
    const[largAmbiente, setLargAmbiente] = useState();
    const[altAmbiente, setAltAmbiente] = useState()
    
    const[compPeca, setCompPeca] = useState();
    const[largPeca, setLargPeca] = useState();
    const[compPecaRodape, setCompPecaRodape] = useState();
    const[alturaPecaRodape, setAlturaPecaRodape] = useState();
    const[perimetro, setPerimetro] = useState();
    const[aberturas, setAberturas] = useState();
    const[alturaRodape, setAlturaRodape] = useState();
    const[resultado, setResultado] = useState();
    const[operacao, setOperacao] = useState();
    const[operacaoArea, setOperacaoArea] = useState();
    const[calculoArea, setCalculoArea] = useState();
   
    const areaPiso = (compPeca*largPeca)/10000
    const rodape = Math.ceil((perimetro-aberturas)/((Math.floor((alturaPecaRodape/alturaRodape)))*compPecaRodape/100))

    
    const formDinamico = () => {
      if (document.getElementById('areaRetangular').checked)
        return (document.getElementById('compAmbiente').style.display = 'block'), (document.getElementById('largAmbiente').style.display = 'block'),(document.getElementById('altAmbiente').style.display = 'none'), (document.getElementById('compAmbienteMenor').style.display = 'none');
      else if (document.getElementById('areaTriangular01').checked)
        return (document.getElementById('compAmbiente').style.display = 'block'), (document.getElementById('largAmbiente').style.display = 'block'),(document.getElementById('altAmbiente').style.display = 'block'), (document.getElementById('compAmbienteMenor').style.display = 'none');
      else if (document.getElementById('areaTriangular02').checked)
        return (document.getElementById('compAmbiente').style.display = 'none'), (document.getElementById('largAmbiente').style.display = 'block'),(document.getElementById('altAmbiente').style.display = 'block'), (document.getElementById('compAmbienteMenor').style.display = 'none');
      else if (document.getElementById('areaTrapezoidal').checked)
        return (document.getElementById('compAmbiente').style.display = 'block'), (document.getElementById('largAmbiente').style.display = 'none'),(document.getElementById('altAmbiente').style.display = 'block'), (document.getElementById('compAmbienteMenor').style.display = 'block');
    }

    useEffect(() => {
      setResultado(formDinamico());
    }, [compAmbiente,largAmbiente,altAmbiente,compAmbienteMenor,operacaoArea]);



    let s = (parseFloat(compAmbiente) + parseFloat(largAmbiente) + parseFloat(altAmbiente)) / 2.0;

   
    const areaComodos = () => {
      if (document.getElementById('areaRetangular').checked)
        return parseFloat(compAmbiente*largAmbiente);
     else if (document.getElementById('areaTriangular01').checked)
       return parseFloat(Math.sqrt(((parseFloat(compAmbiente) + parseFloat(largAmbiente) + parseFloat(altAmbiente)) / 2.0) * (((parseFloat(compAmbiente) + parseFloat(largAmbiente) + parseFloat(altAmbiente)) / 2.0) - compAmbiente) * (((parseFloat(compAmbiente) + parseFloat(largAmbiente) + parseFloat(altAmbiente)) / 2.0) - largAmbiente) * (((parseFloat(compAmbiente) + parseFloat(largAmbiente) + parseFloat(altAmbiente)) / 2.0) - altAmbiente)));
     else if (document.getElementById('areaTriangular02').checked)
        return parseFloat((largAmbiente*altAmbiente)/2);
     else if (document.getElementById('areaTrapezoidal').checked)
        return parseFloat((((parseFloat(compAmbiente))+(parseFloat(compAmbienteMenor)))/2)*parseFloat(altAmbiente));
    }
     useEffect(() => {
      setCalculoArea(areaComodos());
    }, [compAmbiente,largAmbiente,altAmbiente,compAmbienteMenor,operacaoArea,]);

    const area = parseFloat(calculoArea);



    const calcular = () => {
      if (document.getElementById('areaRetangular').checked && document.getElementById('assentamentoParalelo').checked)
        return parseFloat(area*1.10);
      else if (document.getElementById('areaRetangular').checked && document.getElementById('assentamentoDiagonal').checked)
        return parseFloat(area*1.20);

      if (document.getElementById('areaTriangular01').checked && document.getElementById('assentamentoParalelo').checked)
        return parseFloat(area*1.10);
      else if (document.getElementById('areaTriangular01').checked && document.getElementById('assentamentoDiagonal').checked)
        return parseFloat(area*1.20);

      if (document.getElementById('areaTriangular02').checked && document.getElementById('assentamentoParalelo').checked)
        return parseFloat(area*1.10);
      else if (document.getElementById('areaTriangular02').checked && document.getElementById('assentamentoDiagonal').checked)
        return parseFloat(area*1.20);

      if (document.getElementById('areaTrapezoidal').checked && document.getElementById('assentamentoParalelo').checked)
        return parseFloat(area*1.10);
      else if (document.getElementById('areaTrapezoidal').checked && document.getElementById('assentamentoDiagonal').checked)
        return parseFloat(area*1.20);
    }

    useEffect(() => {
      setResultado(calcular());
    }, [compAmbiente,largAmbiente,altAmbiente,compAmbienteMenor,compPeca,largPeca,operacao]);

    const pe??as = resultado/(areaPiso);


    return (
      <div className="flex flex-col">

        <div className="flex items-center w-full h-20 bg-blue-900 fixed" >
          <h1 className="mx-auto font-rubik text-4xl text-white">Minha Obra</h1>
        </div>
        <div className="flex text-2xl text-blue-900 font-bold mt-32">
          <h1 className="mx-auto font-sans font-bold">Quantifica????o de Pisos</h1>
        </div>
        <div className="flex flex-col mx-auto max-w-screen-lg px-12 text-base text-l mt-12">
          <h1 className=" text-blue-900 font-bold font-sans text-l">Para calcular a quantidade de pisos a serem assentados em determinado local, primeiramente ?? necess??rio que sejam retiradas as medidas do ambiente a ser revestido, para com isso fazer o input dos dados solicitados abaixo. Com as medidas em m??os escolher o tipo de ambiente de acordo com a semelhan??a com o seu local e ap??s isso inserir suas medidas.
          </h1>
          <h1 className=" text-blue-900 font-bold font-sans text-l ">Para encontrar as dimens??es e metragem do piso consultar o vendedor ou identificar na pr??pria caixa do material.
          </h1>
          <h1 className=" text-blue-900 font-bold font-sans text-l ">Muita aten????o na hora de escolher a dire????o do assentamento dos pisos, pois isso impctar?? na quantidade adequada de pe??as.
          </h1>
            
          </div>

            <div className="flex flex-col mx-auto mt-12 text-center text-blue-900  text-base font-sans font-bold">
              <div className="flex flex-col text-center text-base font-sans mt-12 text-blue-900 ">
            <h1 className="flex flex-col text-base font-sans font-bold">Selecione o tipo de ambiente:</h1>
            
           
          </div>
         

          <div onChange={(e) => setOperacaoArea(e.target.value)}
            className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-12 text-center py-8 px-auto sm:px-0 mx-auto text-blue-900 font-sans font-bold " >
            <div>
              
              <input name="theradio" id="areaRetangular" type='radio' value="areaRetangular"/>
              <label className="pl-2">Retangular</label>
              <img 
                src={retangulo} 
                 alt="" className="w-40 mx-auto" 
                />
            </div>
            <div>
              <input name="theradio" id="areaTriangular01" type='radio'value="areaTriangular01"/>
              <label className="pl-2">Triangular</label>
              <img 
                src={trianguloRetangulo} 
                 alt="" className="w-40 mx-auto" 
                />
            </div>
            <div>
              <input name="theradio" id="areaTriangular02" type='radio' value="areaTriangular02"/>
              <label className="pl-2">Triangular</label>
              <img 
                src={trianguloIsocelis} 
                 alt="" className="w-40 mx-auto" 
                />
            </div>
            <div>
              <input name="theradio" id="areaTrapezoidal" type='radio' value="areaTrapezoidal"/>
              <label className="pl-2">Trapezoidal</label>
              <img 
                src={trapezio} 
                 alt="" className="w-40 mx-auto" 
                />
            </div>
            
          </div>
            


                
            
          </ div>

        <div className="mx-auto px-12 flex flex-col text-blue-900 text-base font-sans mt-12">
          <h1 className="mx-auto font-bold ">Insira o comprimento e largura do ambiente em m:</h1>

            <div className="flex flex-col" >
              <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-2 font-bold "
              placeholder="Comprimento (m)"
              id="compAmbiente"
              type="number"
              value={compAmbiente}
              onChange={(e) => setCompAmbiente(e.target.value)}
              
              />

              <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
              placeholder="Largura (m)"
              id="largAmbiente"
              type="number"
              value={largAmbiente}
              onChange={(e) => setLargAmbiente(e.target.value)}
              
              />
                         
              <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
              placeholder="Altura (m)"
              id="altAmbiente"
              type="number"
              value={altAmbiente}
              onChange={(e) => setAltAmbiente(e.target.value)}
              
              />
              <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
              placeholder="Comprimento lado Menor (m)"
              id="compAmbienteMenor"
              type="number"
              value={compAmbienteMenor}
              onChange={(e) => setCompAmbienteMenor(e.target.value)}
              
              />

            </div>
        
            <label>A ??rea do ambiente ??: {area.toFixed(2)}m??</label>
          
        </div>


        <div className="mx-auto text-blue-900 px-12 flex flex-col text-base font-sans mt-12">
          <h1 className="mx-auto font-bold ">Insira as dimens??es do piso em cent??metros</h1>

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
        
            <label>A ??rea do seu Piso ?? : {areaPiso}m??</label>
        </div>

        <div className="mx-auto px-12 flex flex-col text-center text-base font-sans mt-12 text-blue-900 ">
          <h1 className="mx-auto px-12 flex flex-col text-base font-sans font-bold">Selecione a dire????o do assentamento:</h1>


          
            <div onChange={(e) => setOperacao(e.target.value)}
            className=" w-full grid grid-cols-2 gap-6 text-center py-8 px-auto sm:px-0 mx-auto text-blue-900 font-sans font-bold ">
              
              <div>
                <input name="assentamento" id="assentamentoParalelo" type='radio' value="assentamentoParalelo"/>
                <label className="pl-2">Paralelo</label>
                <img 
                  src={paralelo} 
                  alt="" className="w-40 mx-auto" 
                  />
              </div>
              <div>
                <input name="assentamento" id="assentamentoDiagonal" type='radio' value="assentamentoDiagonal"/>
                <label className="pl-2">Diagonal
                </label>
                <img 
                  src={diagonal} 
                  alt="" className="w-40 mx-auto" 
                  />
                </div>
            </div>
 
   
        </div>

        <div className=" text-center text-blue-900 mx-auto max-w-screen-lg  px-10 flex flex-col text-base font-sans font-bold mt-12 border-2 border-blue-900">
          <label >Voc?? utilizar??: {parseFloat(resultado).toFixed(2)}m?? de piso ou {Math.round(pe??as)} pe??as de piso. </label>
        </div>

        <div>
          <div className="flex text-2xl mt-20">
            <h1 className=" text-blue-900 mx-auto px-12 font-sans font-bold">Quantifica????o dos Rodap??s</h1>
          </div>
          <div className="flex  flex-col text-base mt-12">
            <h1 className="mx-auto max-w-screen-lg px-12 text-left text-blue-900 font-bold font-sans text-l ">Para calcular a quantidade de pisos necess??rios para execu????o do rodap?? ?? necess??rio medir todo o per??metro do ambiente e descontar os comprimentos dos v??os onde n??o ser??o colocados rodap??s.
            </h1>
            
          </div>
          

            <div className="mx-auto flex flex-col text-base font-sans mt-12 text-blue-900">              
                <div className="mx-auto flex flex-col font-bold">   
                <h1>Preencha os campos com as dimens??es:</h1>

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
                  placeholder="Comprimento da Pe??a (cm)"
                  type="number"
                  value={compPecaRodape}
                  onChange={(e) => setCompPecaRodape(e.target.value)}
                  />
                  <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
                  placeholder="Altura da Pe??a (cm)"
                  type="number"
                  value={alturaPecaRodape}
                  onChange={(e) => setAlturaPecaRodape(e.target.value)}
                  />
                  <input className=" my-1 px-2 text-blue-900 border border-blue-900 border-spacing-1 font-bold"
                  placeholder="Altura do Rodap?? (cm)"
                  type="number"
                  value={alturaRodape}
                  onChange={(e) => setAlturaRodape(e.target.value)}
                  />
                </div>  
              </div>

              <h2 className="mx-auto max-w-screen-lg px-12 text-left text-blue-900 font-sans text-l ">
              Fique atento, no campo acima devem ser inseridos os comprimentos de paredes e aberturas em metros, as dimens??es da pe??a em centimetros e a altura do rodap?? tamb??m ?? em centimetros.
              </h2>

              <div className=" text-center text-blue-900 mx-auto max-w-screen-lg px-4 flex flex-col text-base font-sans font-bold mb-20 mt-12 border-2 border-blue-900">
                <label>Voc?? utilizar??: {(rodape*(compPecaRodape*alturaPecaRodape))/10000}m?? ou {(rodape)} pe??as de piso para o rodap??.</label>
              </div>
            </div>
            
        </div>
        

        </div>

        
         
      
    )
  }




export default PisosCalculator;
