import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
        <div className="hero-container">
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
            
            <h1>WELCOME TO VEGANIMAL</h1>
            <p>What are you waitting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    SIGN IN <i className='fas fa-seedling' />
                </Button>
            </div>
            
        </div>
    <section id="hero" class="d-flex align-items-center">

        <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="row">
                        <div class="col-xl-6">
                            <h1>Being vegetarian really saves lives.</h1>
                            <h2>Quand vous étes végétarien, vous ne vous aidez pas simplement, mais vous sauvez aussi la
                                terre.</h2>

                            <a href="#about" class="btn-get-started scrollto">Pourquoi</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default HeroSection
