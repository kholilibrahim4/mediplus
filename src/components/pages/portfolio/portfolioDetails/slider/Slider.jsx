import React, { useContext } from 'react'
import SliderSingle from './SliderSingle'
import styles from './Slider.module.css'
import { AllDataContext } from '../../../../contextApi/DataContext'
import OwlCarousel from 'react-owl-carousel';

export default function Slider() {
    const {portfolio:{portfolioPage:{portfolioSlider}}} = useContext(AllDataContext)
    return (
        <div className={`${styles.imageSlider}`}>
            <OwlCarousel className="pf-details-slider" loop margin={10} smartSpeed={500} nav items={1} autoplay dots={false}>
                {portfolioSlider.map((img)=>{
                    return <SliderSingle img={img} />
                })}
            </OwlCarousel>
        </div>
    )
}
