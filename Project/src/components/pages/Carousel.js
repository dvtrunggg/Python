import React, {Component} from 'react'
import './Carousel.css'
// import PropTypes from 'prop-types'


class Carousel extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <>
                <main id="main">

<section id="about" class="about section-bg">
    <div class="container" data-aos="fade-up">

        <div class="row no-gutters">
            <div class="content col-xl-5 d-flex align-items-stretch">
                <div class="content">
                    <h3 style={{color:"#e03a3c"}}>Si tout le monde mangeait moins de viande, la terre serait
                        meilleure.
                    </h3>
                    <p><i class="icofont-earth"></i>
                        L'industrie de l'élevage a vraiment un grand impact sur l'environnement.
                    </p>
                    <a href="https://unnotremonde.com/reflexions-alternatives/modes-de-vie-alternatifs-vivre-autrement/pourquoi-devenir-vegetarien-5-bonnes-raisons-de-ne-plus-manger-danimaux/"
                        class="about-btn"><span>Plus d'informations</span> <i
                            class="bx bx-chevron-right"></i></a>
                </div>
            </div>
            <div class="col-xl-7 d-flex align-items-stretch">
                <div class="icon-boxes d-flex flex-column justify-content-center">
                    <div class="row">
                        <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <svg style={{color:'#e03a3c'}} width="1em" height="1em" viewBox="0 0 16 16" class="water bi bi-droplet-fill"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z" />
                            </svg>
                            <h4>Gaspillage d'eau</h4>
                            <p>
                                L'industrie de l'élevage est considérée comme la plus gaspilleuse et la plus
                                polluante pour les ressources en eau
                            </p>
                        </div>
                        <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <i class='bx bx-wind'></i>
                            <h4>La pollution de l'air</h4>
                            <p>Produire 1 kg de viande émettra 36,4 kg de CO2 des émissions d'une voiture de 155
                                km
                                De plus, l'industrie de l'élevage émet 37% CH4, 65% NOx, 2/3 de quantité
                                totale de NH3, ...
                            </p>
                        </div>
                        <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                            <i class='bx bxs-tree'></i>
                            <h4>Utiliser la terre pour le bétail</h4>
                            <p>
                                30% des terres et 33% des champs humains sont utilisés pour nourrir et produire
                                de la nourriture pour le bétail.
                                Par conséquent, les gens déforestation pour gagner plus de terres.
                            </p>
                        </div>
                        <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">

                            <i class='bx bxs-spa'></i>
                            <h4>Consommer trop de nourriture</h4>
                            <p>38% de la nourriture mondiale n'est pas consommée par les humains, mais par le
                                bétail.
                                Pour apporter 1 calorie aux humains, le nombre pour les vaches est de près de 40
                                calories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section></main>
            </>
        )
    }
}

Carousel.propTypes = {
    
}

export default Carousel