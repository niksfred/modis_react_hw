import React from 'react'
import { FilterOptions } from '../App';
import Comment, { CommentInterface, Status } from './Comment';

interface CommentsInterface {
    comments: Array<CommentInterface>
    filterState: React.ComponentState;
}

const Comments = ({comments, filterState}: CommentsInterface): JSX.Element => {

    const filteredComments : Array<CommentInterface> = comments.filter(comment => {
        let keep = true;
        if (filterState === FilterOptions.ACTIVE) {
            keep = comment.status === Status.ACTIVE
        } else if (filterState === FilterOptions.SUSPENDED) {
            keep = comment.status === Status.SUSPENDED
        }
        return keep
    })

    const sortedComments: Array<CommentInterface> = filteredComments.sort((a, b) => 
    Date.parse(`${b.updatedAt}`) - Date.parse(`${a.updatedAt}`)
    );


  return (
    <div>
        {sortedComments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  )
}

export default Comments