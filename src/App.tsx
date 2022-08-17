import React from 'react';
import CommentForm from './components/CommentForm';

function App() {
  return (
    <div className="bg-slate-700 w-screen h-screen flex justify-center pt-20">
      <header className="flex flex-col items-center">
        <h3 className="text-4xl text-white text-center">React Comments Application</h3>
        <CommentForm />
      </header>
    </div>
  );
}

export default App;
