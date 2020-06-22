 
import React  from "react";

import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube, FiAlignJustify   } from "react-icons/fi";

import "./styles.css";

export default function PageHome() {




  return (
    <div>
     <header>
     <nav>
            <div className="navigator">


                <img src="../logo-stalo"alt="logo"/>

                <div className="navigator-m">
                    <a id="btn" href="#">Vamos conversar?</a>
                    <ul>
                        <li><a href="#"> <FiFacebook size={22}/> </a></li>
                        <li><a href="#"><FiInstagram size={22}/> </a></li>
                        <li><a href="#"> <FiLinkedin size={22}/>  </a></li>
                        <li><a href="#"> <FiYoutube size={22}/> </a></li>
                        </ul>
                        <span >   <a href="#    "> <FiAlignJustify size={40}/> </a></span>
                     
                         
                    
                </div>
            </div>
        </nav>
    </header>

<section>
    <div id="page-home"> 
       <h1>A tecnologia pode transformar o seu negócio!</h1> 
    </div>
    </section>
    <section className="page-2">
    <div > 
       <h1>A tecnologia pode transformar o seu negócio!</h1> 
    </div>
    </section>
     
    </div>
  );
}
