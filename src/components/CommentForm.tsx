import React, {useState} from "react";
import { CommentInterface } from "./Comment";

const CommentForm: React.FC = (comment: CommentInterface | {}): JSX.Element => {

    const  [formData, setFormData] = useState({title: "", content: "", status: "active"});

    const isRadioChecked = (value:string) : boolean => formData.status === value

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log(formData)
        setFormData({title: "", content: "", status: "active"})
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[320px] text-white m-4">
        <h2 className="text-2xl mb-4">Create new comment :</h2>
        <input onChange={handleInputChange} value={formData.title} type="text" id="title" name="title" placeholder="Enter your title here..." className="p-2 w-full bg-slate-100 rounded-xl text-slate-900 mb-4" />
        <textarea onChange={handleTextAreaChange} value={formData.content} id="content" name="content" placeholder="Enter your content here..." className="p-2 w-full h-[240px] bg-slate-100 rounded-xl text-slate-900"></textarea>
        <div className="flex justify-between w-full p-2">
            <p>Status: </p>
            <div>
            <input onChange={handleInputChange} type="radio" name="status" value="active" checked={isRadioChecked("active")} /> <label>Active</label>
            </div>
            <div>
            <input onChange={handleInputChange} type="radio" name="status" value="suspended" checked={isRadioChecked("suspended")} /> <label>Suspended</label>
            </div>
        </div>
        <button type="submit" className="px-4 py-2 bg-slate-100 rounded-xl text-slate-900 m-4">Submit</button>
    </form>
  )
}

export default CommentForm