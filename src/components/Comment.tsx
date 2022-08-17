import Markdown from 'markdown-to-jsx';

export const enum Status {
    ACTIVE = "active",
    SUSPENDED= "suspended"
}

export interface NewCommentInterface {
  title: string;
  content: string;
  status: Status
}

export interface CommentInterface {
    id: number;
    title: string;
    content: string;
    status: Status;
    createdAt: string;
    updatedAt: string;
}

const Comment = (comment: CommentInterface): JSX.Element => {
  return (
    <div>
        <h1>{comment.title}</h1>
        <Markdown>{comment.content}</Markdown>
        <span>{comment.status}</span>
    </div>
  )
}

export default Comment