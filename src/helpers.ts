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

export const deleteComment = (id: number): Array<CommentInterface> => {
    const existingComments = getComments();
    const newComments = existingComments.filter(comment => comment.id !== id);
    localStorage.setItem("comments", JSON.stringify(newComments));
    return newComments
}

export const editComment = (edditedComment: CommentInterface): void => {
    const currentComments = getComments();
    const commentIndex = currentComments.findIndex(comment => comment.id === edditedComment.id);
    currentComments[commentIndex] = edditedComment;
    localStorage.setItem("comments", JSON.stringify(currentComments));
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
