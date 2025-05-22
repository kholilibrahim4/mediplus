
import { Col } from 'react-bootstrap'
import styles from './WhyChoose.module.css'


export default function ChooseList({list}) {
    return (
        <Col lg={6}>
            <ul className={`${styles.list}`}>
                {list.map((item,ind)=>{
                    return(
                        <li key={ind}><i className="fa fa-caret-right"></i>{item} </li>
                    )
                })}
            </ul>
        </Col>
    )
}
