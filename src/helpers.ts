import { CommentInterface } from "./components/Comment";

export const addComment = (newComment: CommentInterface): void => {
    const existingComments = getComments();
    existingComments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(existingComments));
    console.log(localStorage.getItem("comments"));
}