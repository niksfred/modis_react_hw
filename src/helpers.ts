import { CommentInterface } from "./components/Comment";

export const addComment = (newComment: CommentInterface): void => {
    const existingComments = JSON.parse(`${localStorage.getItem("comments")}`) || [];
    existingComments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(existingComments));
    console.log(localStorage.getItem("comments"));
}