import React, { useContext } from 'react'
import styles from './Comments.module.css'
import { Col } from 'react-bootstrap'
import { AllDataContext } from '../../../../contextApi/DataContext'
import CommentSingle from './CommentSingle'


export default function Comments() {
    const { blogs: { blogPage: { news: { comments: { title, comment } } } } } = useContext(AllDataContext)
    return (

        <div className={`${styles.blogComments}`}>
            <h2>{title}</h2>
            <div className="commentsBody">
                {comment.map((item) => {
                    return <CommentSingle
                        key={Math.random()}
                        authorImg={item.authorImg}
                        authorName={item.authorName}
                        postDate={item.postDate}
                        postTime={item.postTime}
                        commentText={item.commentText}
                        replayLink={item.replayLink}

                        replayClass={item.replay? 'replay':''}
                    />
                })}

            </div>
        </div>


    )
}
