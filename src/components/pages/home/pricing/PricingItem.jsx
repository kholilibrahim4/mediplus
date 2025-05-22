import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Pricing.module.css'


export default function PricingItem({icon,title,amount,visit,btnText,priceList}) {
    return (
        <Col lg={4} md={12}>
            <div className={`${styles.singleTable}`}>
                {/* <!-- Table Head --> */}
                <div className={`${styles.tableHead}`}>
                    <div className={`${styles.icon}`}>
                        <i className={`icofont ${icon}`}></i>
                    </div>
                    <h4 className={`${styles.title}`}>{title}</h4>
                    <div className={`${styles.price}`}>
                        <p className={`${styles.amount}`}>{amount}<span>{visit}</span></p>
                    </div>
                </div>
                {/* <!-- Table List --> */}
                <ul className={`${styles.tableList}`}>
                    {priceList.map((item)=>{
                        return (
                            <li className={item.check ? '' : `${styles.cross}`}>
                                <i className={`icofont ${item.check ? 'icofont-ui-check' : 'icofont-ui-close'}`}></i>
                                {item.list}
                            </li>
                        )
                    })}


                    {/* <li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
                    <li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
                    <li className={`${styles.cross}`}><i className="icofont icofont-ui-close"></i>Nullam interdum enim</li>
                    <li className={`${styles.cross}`}><i className="icofont icofont-ui-close"></i>Donec ultricies metus</li>
                    <li className={`${styles.cross}`}><i className="icofont icofont-ui-close"></i>Pellentesque eget nibh</li> */}
                </ul>
                <div className={`${styles.tableBottom}`}>
                    <a className={`${styles.btn} btn`} href="#">{btnText}</a>
                </div>
                {/* <!-- Table Bottom --> */}
            </div>
        </Col>
    )
}
