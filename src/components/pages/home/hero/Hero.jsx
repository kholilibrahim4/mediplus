import React, { useContext, useEffect } from 'react'
import HeroItem from './HeroItem'
import styles from './Hero.module.css'
import { AllDataContext } from '../../../contextApi/DataContext'


import OwlCarousel from 'react-owl-carousel';



export default function Hero() {

    

    const { hero } = useContext(AllDataContext)
    return (
        <section className={`${styles.slider}`}>
            <OwlCarousel className={`${styles.heroSlider} owl-theme`} loop margin={10} smartSpeed={500} nav items={1} autoplay dots={false}>
                {hero.map((item) => {
                    return <HeroItem
                        title={item.title}
                        desc={item.desc}
                        btn={item.btn}
                        bgImg={item.bgImg}
                        owlClass={'item'}
                        
                    />
                })}
            </OwlCarousel>
        </section>
    )
}
