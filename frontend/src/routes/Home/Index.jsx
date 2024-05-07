import { Link } from "react-router-dom";
import { auth } from '../../firebaseConnection';
import { onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import './Home.css'

import CardReceita from '../../assets/Component/UltimasReceitas/CardReceita'
import { useEffect } from "react";


import Header from "../../assets/Component/Header/Header";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="conteiner">
        <Header/>
        <section>
          <div className="title">
            <img className="image-title" src='https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712793600&semt=sph'/>
            <h1>Gere receitas com apenas um clique!</h1>
          </div>
          <Link to='/ConfigReceita'>
            <div className="gerar-receita">
              <button>Gerar receita</button>
              <p>Forneça seus ingredientes <br></br> e gere uma receita!</p>
            </div>
          </Link>
          </section>  
        <div className="historico">
          <h2>Ultimas receitas</h2>
          <CardReceita className="img" title="aaa" ingredients={["500 g de massa de lasanha", "500 g de carne moída", "2 caixas de creme de leite"]} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUL_RKyGzqiIMNpRSLzWKsr1wq0Dwc0-3H4A&s"/>
        </div>
      </div>
    </>
  );
}
