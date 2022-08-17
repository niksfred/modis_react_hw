import Markdown from 'markdown-to-jsx';

export const enum Status {
    "active", "suspended"
}

export interface CommentInterface {
    id: number;
    title: string;
    content: string;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
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