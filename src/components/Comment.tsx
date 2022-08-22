import Markdown from 'markdown-to-jsx';
import { useState } from 'react';
import { deleteComment, editComment, getComments } from '../helpers';
import CommentForm from './CommentForm';

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

export interface CommentProps {
  comment: CommentInterface,
  setComments: React.Dispatch<React.SetStateAction<CommentInterface[]>>
}

const Comment = ({comment, setComments}: CommentProps): JSX.Element => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedComment = comment
    comment.status = e.target.value as Status
    editComment(updatedComment);
    setComments(getComments())
  }

  const handleDelete = (): void => {
    const newCommentsArray = deleteComment(comment.id)
    setComments(newCommentsArray)
  }

  return (
    <>
    {!isFormOpen && <div className="bg-slate-100 my-4 p-4 w-[320px] rounded-xl">
      <div className="flex justify-between border-b-2">
        <h4 className="text-2xl">{comment.title}</h4>
        <div className="flex items-center">
          <button onClick={() => setIsFormOpen(true)} className="mx-4 bg-slate-100 rounded-xl text-slate-900">Edit</button>
          <button onClick={handleDelete}><i><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg></i></button>
        </div>
        </div>
        <div className="my-4"><Markdown>{comment.content}</Markdown></div>
        <div className="flex justify-between">
        <span className="border-2 rounded-lg bg-slate-200">{comment.status === "active" ? "Active" : "Suspended"}</span>
        <div>
          <input className="mx-1" type="radio" name={`status-${comment.id}`} value={Status.ACTIVE} checked={comment.status === Status.ACTIVE} onChange={handleStatusChange}/>
          <input className="mx-1" type="radio" name={`status-${comment.id}`} value={Status.SUSPENDED} checked={comment.status === Status.SUSPENDED} onChange={handleStatusChange} />
        </div>
        </div>
    </div>}
    {isFormOpen && <CommentForm comment={comment} setComments={setComments} setIsFormOpen={setIsFormOpen} />}
    </>
  )
}

export default Comment