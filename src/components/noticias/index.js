import React, { useState } from 'react';
import './styles.css'
 
import json from '../../JSON/noticias.json'


export default function Noticias() {
    const editorias = json[0].Editorias
    const [ editoriaAtual, setEditoriaAtual ] = useState(editorias)
    const [ dateFilter, setDateFilter] = useState("Decrescente")
    
    function selectEditoria(event){
        
        if(event.target.value === "Todos"){
            return setEditoriaAtual(editorias)
        }
        setEditoriaAtual(editorias.filter(editoria=> editoria.Editoria === event.target.value))
        
    }
    function selectData(event){
      if (event.target.value === "Decrescente"){
        setDateFilter("Decrescente")
      }else if (event.target.value === "Crescente") {
        setDateFilter("Crescente")
      }

    }
    
    const editoriaAtualFilter = editoriaAtual.length === 1 ? true : false
    
    let todasNoticias = []

    const todasEditorias = editoriaAtual.map(editoria=> editoria.Notícias.map(noticia=> noticia))

    for(var contador in todasEditorias){
        todasNoticias.push(...todasEditorias[contador])
        
    }
    
      const dateToTimestamp = (date) => {
      
      const parts = date.split('-');
      const mydate = new Date(parts[2], parts[1] - 1, parts[0]); 
      const timestamp = mydate.getTime()
      return timestamp
      
    }
    
    

   const organizeArrayByDate = editoriaAtual[0].Notícias
  
   

  
   organizeArrayByDate.sort(((a,b)=>{
    if(dateFilter==='Crescente'){
      return  dateToTimestamp(a['Data de publicação']) - dateToTimestamp(b['Data de publicação']) 

    }else if (dateFilter ==='Decrescente'){
      return  dateToTimestamp(b['Data de publicação']) -  dateToTimestamp(a['Data de publicação'])

    }
    return 0
  }))
 
const organizeAllNewsByDate = todasNoticias

organizeAllNewsByDate.sort(((a,b)=>{
  if(dateFilter==='Crescente'){
    return  dateToTimestamp(a['Data de publicação']) - dateToTimestamp(b['Data de publicação']) 

  }else if (dateFilter ==='Decrescente'){
    return  dateToTimestamp(b['Data de publicação']) -  dateToTimestamp(a['Data de publicação'])

  }
  return 0
}))

    return (
    <div className="content">
        <div className="noticiasContainer">
          
            <div className="noticiasTop">
                <h2>EDITORIAS</h2>
                <div className="selects">   
                    <label>Ordenar por data: </label>
                    <select onChange={selectData}>
                      <option value="Decrescente">Decrescente</option>
                      <option value="Crescente">Crescente</option>

                    </select> 
                    <label>Filtrar por: </label>
                        <select onChange={selectEditoria} >
                            <option value="Todos">Todos</option>
                            {editorias.map((editoria)=> (
                              <option key={editoria.Editoria} value={editoria.Editoria}>{editoria.Editoria}</option> 
                            ))}
                           
                        </select>
                </div>
            </div>
                <div className="noticiasContent">
                    { editoriaAtualFilter ? 
                    (organizeArrayByDate.map((noticia)=>(
                    
                            <div key={noticia.id} className="noticias">
                            <div className="header-noticia">  
                              <p>{noticia['Data de publicação']}</p>
                              <strong>{editoriaAtual[0].Editoria}</strong>
                            </div>
                            <img src={`/Notícias/${noticia.Foto}`} alt={noticia.Título}/>
                            <div className="noticias-texto">
                            <h2>{noticia.Título}</h2>
                            <p>{noticia.Texto}</p>
                            </div>
                            <a href="/">Saiba mais</a>
                            </div>
                        ))) :
                      
                       (
                         todasNoticias.map(noticia=>(
                          <div key={noticia['Data de publicação']} className="noticias">
                          <div className="header-noticia">  
                            <p>{noticia['Data de publicação']}</p>
                            <strong>{noticia.editoria}</strong>
                          </div>  
                          <img src={`/Notícias/${noticia.Foto}`} alt={noticia.Título}/>
                          <div className="noticias-texto">  
                            <h2>{noticia.Título}</h2>
                            <p>{noticia.Texto}</p>
                          </div>  
                          <a href="/">Saiba mais</a>
                          </div>
                         ))
                       )
                        
                        
                        
                    } 
                </div>
        </div>
  </div>
  );
}


