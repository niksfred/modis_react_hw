import { CommentInterface, NewCommentInterface } from "./components/Comment";

export const getComments = (): CommentInterface[] => {
const comments = JSON.parse(`${localStorage.getItem("comments")}`) || []
return comments 
}  

export const addComment = (newComment: CommentInterface): void => {
    const existingComments = getComments();
    existingComments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(existingComments));
}

export const constructNewComment = (comment: NewCommentInterface): CommentInterface => {

    let newId
    const comments = getComments()
    if (comments.length === 0) {newId = 1}
    else {
        newId = comments[comments.length - 1].id + 1
    }

    const currentDate = new Date();
    
    const newComment: CommentInterface = {
        id: newId,
        title: comment.title,
        content: comment.content,
        status: comment.status,
        createdAt: currentDate,
        updatedAt: currentDate,
    }

    return newComment;
}