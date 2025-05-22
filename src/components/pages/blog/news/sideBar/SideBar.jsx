import React from 'react'
import styles from './SideBar.module.css'
import SearchBox from './searchBox/SearchBox'
import Category from './category/Category'
import RecentPost from './recentPost/RecentPost'
import Tags from './tags/Tags'

export default function SideBar() {
    return (
        <div className={`${styles.mainSidebar}`}>
            <SearchBox />
            <Category />
            <RecentPost />
            <Tags />
        </div>
    )
}
