import React, {Component} from 'react'
import './Content_Label.css'
// import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'


class Content_Label extends Component{
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

            </>
        )
    }
}

Content_Label.propTypes = {
    
}

export default Content_Label