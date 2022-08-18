import { CommentInterface, NewCommentInterface } from "./components/Comment";

export const addComment = (newComment: CommentInterface): void => {
    const existingComments = JSON.parse(`${localStorage.getItem("comments")}`) || [];
    existingComments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(existingComments));
    console.log(JSON.parse(`${localStorage.getItem("comments")}`));
}

export const constructNewComment = (comment: NewCommentInterface): CommentInterface => {

    const newId = 1;
    const currentDate = new Date();
    const currentDateFormated = currentDate.getDate() + "/"
                + (currentDate.getMonth()+1)  + "/" 
                + currentDate.getFullYear() + " @ "  
                + currentDate.getHours() + ":"  
                + currentDate.getMinutes() + ":" 
                + currentDate.getSeconds();

    const newComment: CommentInterface = {
        id: newId,
        title: comment.title,
        content: comment.content,
        status: comment.status,
        createdAt: currentDateFormated,
        updatedAt: currentDateFormated,
    }

    return newComment;
}