import React from 'react';
import CommentForm from './components/CommentForm';
import Comments from './components/Comments';
import CommentsFilter from './components/CommentsFilter';
import { getComments } from './helpers';

export const enum FilterOptions {
    ALL ="all",
    ACTIVE = "active",
    SUSPENDED = "suspended"
}

function App() {
  const [comments, setComments] = React.useState<React.ComponentState>(getComments());
  const [filterState, setFilterState] = React.useState<React.ComponentState>(FilterOptions.ALL);

  return (
    <div className="bg-slate-700 w-full h-full flex flex-col justify-center items-center pt-20">
      <header className="flex flex-col items-center">
        <h3 className="text-4xl text-white text-center">React Comments Application</h3>
        <CommentForm setComments={setComments} />
      </header>
      <main>
        <CommentsFilter setFilterState={setFilterState}  />
        <Comments comments={comments} setComments={setComments} filterState={filterState} />
      </main>
    </div>
  );
}

export default App;
