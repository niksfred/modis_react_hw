import { Status } from "./components/Comment";

interface NewCommentInterface {
    title: string;
    content: string;
    status: Status
}


const createComment = ({title, content, status}: NewCommentInterface) => {
const id = window.localStorage.length ;
}