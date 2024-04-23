import React from 'react'
import gsap from 'gsap'
import "../Pages.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Presentation = () => {
    const h1 = document.querySelector("h1");
    gsap.registerPlugin(ScrollTrigger);

    gsap.to (h1,{
        xPercent : 500,
        scrollTrigger:{
            trigger: h1,
            toggleActions: "none none none none",
            start: "top 40%",
            markers:true,
        }

    })
  return (

    <div>
        <div className='presentationBox'>
        <div className='boxLeft'>    
        <h1>
            Bienvenue dans l'Application Todo List !
        </h1>
        <h2>
            Organisez Votre Vie, Tâche par Tâche
        </h2>
        <p> 
            Bienvenue dans notre application Todo List,
            l'outil parfait pour vous aider à garder une trace de toutes vos tâches importantes,
            petits et grands projets, et tout ce que vous devez accomplir.
        </p>
  
        <h2>
        Comment Ça Marche ?
        </h2>
        <p>
        Ajoutez Vos Tâches : Commencez par ajouter vos tâches en un clin d'œil. 
        Tapez simplement le nom de votre tâche et appuyez sur "Ajouter". Vous pouvez également spécifier des détails supplémentaires tels que la date d'échéance,
        la priorité et les étiquettes.Organisez et Priorisez : Une fois vos tâches ajoutées,
        organisez-les comme bon vous semble. Glissez-déposez pour réorganiser l'ordre des tâches,
        attribuez-leur des priorités pour savoir quoi faire en premier,
        et ajoutez des étiquettes pour une catégorisation facile.
        Suivez Vos Progrès : Gardez un œil sur votre progression à tout moment. 
        Visualisez vos tâches terminées, celles en cours et celles à venir pour rester motivé et
        concentré sur ce qui compte vraiment.
        Synchronisation Instantanée : Grâce à notre synchronisation en temps réel,
        vos données sont toujours à jour, peu importe l'appareil que vous utilisez. 
        Ajoutez une tâche sur votre téléphone pendant que vous êtes en déplacement et
        retrouvez-la instantanément sur votre ordinateur de bureau lorsque vous rentrez chez vous.
        </p>
        <div className="boxRight">

        </div>
        </div>
    </div>
    </div>
  )
}

export default Presentation