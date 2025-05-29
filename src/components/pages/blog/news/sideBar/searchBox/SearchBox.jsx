import React from 'react'
import Form from '../../../../../form/Form'
import InputField from '../../../../../form/InputField'
import styles from './SearchBox.module.css'

export default function SearchBox() {
    return (
        <div className={`${styles.singleWidget} ${styles.search}`}>
            <Form className={`${styles.form}`}>
                <InputField type="email" placeholder="Search Here..."/>
                <a className={`${styles.button}`} href="#">**<i className="fa fa-search"></i></a>
            </Form>
            
        </div>
    )
}
