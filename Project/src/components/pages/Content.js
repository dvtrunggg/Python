import React, {Component} from 'react'
import './Content.css'
// import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'


class Content extends Component{
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
            
            <div className="Content">
      <section id="tabs" class="tabs">
        <div class="container" data-aos="fade-up">
            <h1 style={{marginBottom:"100px" }}>Une alimentation saine est une forme de respect de soi</h1>
            <ul class="nav nav-tabs row d-flex">
                <li class="nav-item col-3">
                    <a class="nav-link active abc" data-toggle="tab" href="#tab-1">
                        <i class='bx bx-body'></i>
                        <h4 class="d-none d-lg-block">Combattre la maladie</h4>
                    </a>
                </li>
                <li class="nav-item col-3">
                    <a class="nav-link abc" data-toggle="tab" href="#tab-2">
                        <i class='bx bxs-florist'></i>
                        <h4 class="d-none d-lg-block">Amélioration de la peau</h4>
                    </a>
                </li>

                <li class="nav-item col-3">
                    <a class="nav-link abc" data-toggle="tab" href="#tab-3">

                        <i class='bx bx-happy-alt'></i>
                        <h4 class="d-none d-lg-block">Améliorer l'humeur</h4>
                    </a>

                </li>
                <li class="nav-item col-3">
                    <a class="nav-link abc" data-toggle="tab" href="#tab-4">
                        <i class='bx bx-sun'></i>
                        <h4 class="d-none d-lg-block">Longévité accrue</h4>

                    </a>
                </li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up"
                            data-aos-delay="100">
                            <h2 class="space">Votre santé sera meilleure</h2>
                            <p class="font-italic">
                                Veuillez réduire la quantité de viande dans les repas quotidiens.
                            </p>
                            <ul>
                                <li><i class="ri-check-double-line"></i> Réduisez le risque de développer des
                                    maladies mortelles.</li>
                                <li><i class="ri-check-double-line"></i> Ajoutez plus de fibres à votre
                                    alimentation.</li>
                                <li><i class="ri-check-double-line"></i> Diversifiez votre alimentation</li>
                            </ul>
                            <p>
                                Un régime végétarien, y compris un régime végétalien,
                                avec un plan solide, est sain, assure une nutrition adéquate et peut être bénéfique
                                dans la prévention et le traitement de certaines maladies...
                            </p>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up"
                            data-aos-delay="200">
                            <img src="assets/img/index/tabs-1-non-malade.jpg" alt="non malade" class="img-fluid"/> 
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab-2">
                    <div class="row">
                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                            <h2 class="space">Belle apparence</h2>
                            <p class="font-italic">
                                Vous aurez un corps faible en gras et une belle peau lorque vous serez véggétarien
                            </p>

                            <ul>
                                <li><i class="ri-check-double-line"></i> Le jeûne a pour effet de perdre du poids.
                                </li>
                                <li><i class="ri-check-double-line"></i> Le jeûne vous aide à réduire les odeurs
                                    corporelles.</li>
                                <li><i class="ri-check-double-line"></i> Le jeûne a pour effet de perdre du poids et
                                    de contrôler la graisse corporelle.</li>

                            </ul>
                            <p>
                                Les aliments végétariens sont complètement pauvres en calories et en matières
                                grasses,
                                vous pouvez donc maintenir votre poids ou perdre du poids en toute confiance.
                                Dans la plante contient des vitamines et des fibres pour favoriser le métabolisme,
                                brûler les calories en excès dans le corps. Cela vous assure de rester en forme.
                            </p>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 text-center ">
                            <img src="assets/img/index/skin.jpg" alt="" class="test"/>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab-3">
                    <div class="row">
                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                            <h2 class="space">Toujours se sentir heureux</h2>
                            <p class="font-italic">
                                Vous aurez un esprit positif chaque jour
                            </p>
                            <ul>
                                <li><i class="ri-check-double-line"></i> Réduire le stress et la pression.</li>
                                <li><i class="ri-check-double-line"></i> Améliore votre humeur et vous fait vous
                                    sentir bien.</li>
                                <li><i class="ri-check-double-line"></i> réduire la probabilité de maladie
                                    psychologique.</li>
                            </ul>
                            <p>Abandonner ou réduire la consommation de viande des repas quotidiens est une façon de
                                gérer le stress et la dépression. L'acide arachidonique est présent dans la viande
                                animale, provoquant des symptômes de fatigue et de dépression</p>

                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 text-center">
                            <img src="assets/img/index/tabs-3.jpg" alt="" class="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab-4">
                    <div class="row">
                        <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                            <h2 class="space">Améliorer votre longévité </h2>

                            <p class="font-italic">
                                Vous vivrez plus longtemps avec une alimentation saine
                            </p>
                            <ul>
                                <li><i class="ri-check-double-line"></i>
                                    Réduire votre risque d'accident vasculaire cérébral.
                                </li>
                                <li><i class="ri-check-double-line"></i>
                                    Le risque de cancer est plus faible.
                                </li>
                                <li><i class="ri-check-double-line"></i>
                                    Vous aurez un coeur sain.
                                </li>
                            </ul>
                            <p>
                                Les personnes en bonne santé mangent moins de risque de maladie,
                                ont une humeur et un esprit optimistes, et donc une meilleure espérance de vie.
                            </p>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 text-center">
                            <img src="assets/img/index/songTho.jpg" alt="" class="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
            </div>


    <div className="Section">    
    <section id="services" class="services section-bg ">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Pourquoi nous choisir</h2>
                <p class="font-italic">
                    Nous sommes le restaurant spécialisé dans la cuisine végétarienne.
                </p>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                        <i class='bx bxs-heart'></i>
                        <h4><Link to="#">Tres apprécié des clients</Link></h4>
                    </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                        <i class='bx bx-food-menu'></i>
                        <h4><Link to="#">Menu diversifié</Link></h4>
                    </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                        <i class='bx bx-dish'></i>
                        <h4><Link to="#">Service attentionné</Link></h4>
                    </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                        <i class='bx bx-coin'></i>
                        <h4><Link to="#">Prix raisonnable</Link></h4>
                    </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="500">
                        <i class='bx bx-check-double'></i>
                        <h4> <Link to = "#">Certificat d'hygiène de sécurité alimentaire </Link></h4>
                    </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="600">
                        <i class='bx bxs-star'></i>
                        <h4><Link to="#">Ingredients frais</Link></h4>

                    </div>
                </div>
                
            </div>

        </div>
    </section>
    </div>
            </>
        )
    }
}

Content.propTypes = {
    
}

export default Content