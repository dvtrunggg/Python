import React, {Component} from 'react'
import '../../App.css'
import './Products.css'
import Footer from '../Fotter'
import Content from './Content'

class Products extends Component{



    componentDidMount(){

    }

    render(){
        return (
            <>
            {/* <h1 className = 'products'>PRODUCTS</h1> */}
            <main id="main">


    <section class="inner-page">
        <div class="container" data-aos="fade-up">

            <section id="portfolio" class="portfolio">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Menu</h2>
                        <p>
                            Nous servons une grande variété de plats végétariens
                        </p>
                    </div>

                    <div class="row" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active" id="tout">All</li>
                                <li data-filter=".filter-app" id="asia">Asiatique</li>
                                <li data-filter=".filter-card" id="euro">Européenne</li>
                                <li data-filter=".filter-web" id="america">Américaine</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/asian/spicy-kale-and-coconut-stir-fry.jpg" class="img-fluid"
                                    alt="spicy-kale-and-coconut-stir-fry" />
                                <div class="portfolio-info">
                                    <h4>Spicy Kale and Coconut Fried Rice</h4>
                                    <p>Riz frit au chou frisé épicé et à la noix de coco</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery"
                                            class="venobox" title="Riz frit au chou frisé épicé et à la noix de coco"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                                class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/america/A.jpg" class="img-fluid"
                                    alt="Burgers aux haricots noirs"/>
                                <div class="portfolio-info">
                                    <h4>Black Bean Burgers</h4>
                                    <p>Burgers aux haricots noirs</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/america/A.jpg" data-gall="portfolioGallery"
                                            class="venobox" title="Burgers aux haricots noirs"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                                class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/asian/goicuon.jpg" class="img-fluid"
                                    alt="Rouleaux de printemps frais avec sauce aux arachides"/>
                                <div class="portfolio-info">
                                    <h4>Fresh Spring Rolls with Peanut Sauce</h4>
                                    <p>Rouleaux de printemps frais avec sauce aux arachides</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/asian/goicuon.jpg" data-gall="portfolioGallery"
                                            class="venobox" title="Rouleaux de printemps frais avec sauce aux arachides"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                                class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src="assets/img/eroupean/A.jpg" class="img-fluid"
                                    alt="Brochettes végétaliennes tandoori"/>
                                <div class="portfolio-info">
                                    <h4>Tandoori vegan kebabs</h4>
                                    <p>Brochettes végétaliennes tandoori</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/eroupean/A.jpg" data-gall="portfolioGallery"
                                            class="venobox" title="Brochettes végétaliennes tandoori"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                                class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/america/B_.jpg" class="img-fluid"
                                    alt="Salade de succotash d'été aux légumes grillés"/>
                                <div class="portfolio-info">
                                    <h4> Grilled Vegetable Summer Succotash Salad</h4>
                                    <p>Salade de succotash d'été aux légumes grillés</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/america/B_.jpg" data-gall="portfolioGallery"
                                            class="venobox" title="Salade de succotash d'été aux légumes grillés"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                                class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/asian/teriyaki-stir-fry-with-noodles-recipe-3-768x1154.jpg"
                                    class="img-fluid" alt="Sauté Veggie Teriyaki avec Nouilles"/>
                                <div class="portfolio-info">
                                    <h4>Veggie Teriyaki Stir-Fry with Noodles</h4>
                                    <p>Sauté Veggie Teriyaki avec Nouilles</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/asian/teriyaki-stir-fry-with-noodles-recipe-3-768x1154.jpg"
                                            data-gall="portfolioGallery" class="venobox" title="Sauté Veggie Teriyaki avec Nouilles"><i
                                                class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                                class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src="assets/img/eroupean/B.jpg" class="img-fluid" alt=""/>
                                <div class="portfolio-info">
                                    <h4>Greek courgette and feta frittata</h4>
                                    <p>Courgette grecque et frittata à la feta</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/eroupean/B.jpg" data-gall="portfolioGallery"
                                            class="venobox" title="Courgette grecque et frittata à la feta"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                                class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src="assets/img/eroupean/C.jpg" class="img-fluid"
                                    alt="Casserole à la grecque avec boulettes de courgettes"/>
                                <div class="portfolio-info">
                                    <h4>Greek-style casserole</h4>
                                    <p>Casserole à la grecque </p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/eroupean/C.jpg" data-gall="portfolioGallery"
                                            class="venobox" title="Casserole à la grecque avec boulettes de courgettes"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                                class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/america/C.jpg" class="img-fluid" alt="Mac’n’Cheese végétalien"/>
                                <div class="portfolio-info">
                                    <h4>Vegan Mac’n’Cheese</h4>
                                    <p>Mac’n’Cheese végétalien</p>
                                    <div class="portfolio-links">
                                        <a href="assets/img/america/C.jpg" data-gall="portfolioGallery"
                                            class="venobox" title="Mac’n’Cheese végétalien"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                                class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            
                </div>
            </section>





        </div>
    </section>

</main>
        <Content />
        <div></div>
        <div></div>
        <Footer />
            </>
        )
    }
    
}

export default Products
