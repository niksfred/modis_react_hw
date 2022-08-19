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
    createdAt: Date;
    updatedAt: Date;
}

const Comment = (comment: CommentInterface): JSX.Element => {
  return (
    <div className="bg-slate-100 my-4 p-2 w-[320px]">
        <h1>{comment.title}</h1>
        <Markdown>{comment.content}</Markdown>
        <p>{comment.status}</p>
    </div>
  )
}

export default Comment