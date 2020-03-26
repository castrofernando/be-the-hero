import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api'

export default function NewIncident(){

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');

    async function handleNewIncident(e){
        e.preventDefault();
        try{
        const data = {title,description,value};
        const response = await api.post('incidents',data, {
            headers: {
                Authorization: ongId
            }
        })
        alert('Caso cadastrado com sucesso!');
        history.push('/profile')
            
        }catch(err){
            alert(`Erro ao cadastrar incident ${err}`);
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content"> 
             <section>
                 <img src={logoImg} alt=""/>
                 <h1>Cadastrar novo caso</h1>
                 <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                 <Link className="back-link" to="/profile">
                     <FiArrowLeft size={16} color="#e02061"/>
                     Voltar para home
                 </Link>
             </section>
             <form onSubmit={handleNewIncident}>
                <input 
                    placeholder="Título do caso"
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    />
                <textarea 
                placeholder="Descrição do caso"
                value={description}
                onChange={e=> setDescription(e.target.value)}
                />
                
                <input 
                    type="text" 
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e=> setValue(e.target.value)}
                    />
                
                <button className="button" type="submit">Cadastrar</button>
             </form>
        </div>
    </div>
    );
}