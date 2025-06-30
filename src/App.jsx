import { useState } from 'react'
import './App.css'


function App() {
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [maintask, setmaintask] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [popupKey, setPopupKey] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    setmaintask([...maintask, { title, desc }])
    settitle('')
    setdesc('')
  }
  const deleteHandler=(index)=>{
    let copyTask=[...maintask]
    copyTask.splice(index,1)
    setmaintask(copyTask)
  }
  const completeHandler = (index) => {
    let copyTask = [...maintask];
    copyTask.splice(index, 1);
    setmaintask(copyTask);
    setShowPopup(false); // reset to allow re-trigger
    setTimeout(() => {
      setPopupKey(prev => prev + 1); // change key to force re-mount
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2200);
    }, 10);
  }
  let renderTask = (
    <h2 className="text-center text-pink-400 text-xl mt-8">No tasks available. Add your first task!</h2>
  );
  if (maintask.length > 0) {
    renderTask = maintask.map((task, index) => (
      <li
        key={index}
        className="mb-4 animate-fade-in"
        style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg p-6 rounded-xl border border-indigo-200 hover:scale-105 transition-transform duration-200 group">
          <div className="flex-1 transition-all duration-300 group-hover:scale-105">
            <h2 className="text-2xl font-bold text-white mb-1 animate-slide-in-left">{task.title}</h2>
            <p className="text-lg text-indigo-100 italic animate-slide-in-right">{task.desc}</p>
          </div>
          <button
            className="mt-4 md:mt-0 md:ml-6 px-5 py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold rounded-lg shadow-md border-2 border-red-300 transition-colors duration-150 animate-pop-in"
            style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'both' }}
            onClick={() => deleteHandler(index)}>
            Delete
          </button>
          <button
            className="mt-4 md:mt-0 md:ml-6 px-5 py-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold rounded-lg shadow-md border-2 border-red-300 transition-colors duration-150 animate-pop-in"
            style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'both' }}
            onClick={() => completeHandler(index)}>
            Completed
          </button>
        </div>
      </li>
    ));
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-10 px-2">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.7); }
          80% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-pop-in {
          animation: pop-in 0.5s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes popup-slide-left {
          0% { opacity: 0; transform: translateX(-100%) scale(0.95); }
          60% { opacity: 1; transform: translateX(10%) scale(1.05); }
          80% { opacity: 1; transform: translateX(0%) scale(1); }
          100% { opacity: 0; transform: translateX(-30%) scale(0.98); }
        }
        .popup-animate {
          animation: popup-slide-left 0.75s cubic-bezier(.4,0,.2,1) both;
        }
      `}
      </style>
      {/* Popup Notification */}
      {showPopup && (
        <div key={popupKey} className="fixed top-8 left-4 z-50">
          <div className="popup-animate flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white text-lg font-semibold border-2 border-green-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Task completed!
          </div>
        </div>
      )}
      <div className="max-w-2xl mx-auto bg-white/10 rounded-2xl shadow-2xl p-8">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 drop-shadow-lg tracking-tight animate-fade-in">
          My <span className="text-pink-400">ToDo</span> App
        </h1>
        <form
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 animate-fade-in"
          onSubmit={handleSubmit}>
          <input
            className="flex-1 px-4 py-3 rounded-lg border-2 border-indigo-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900 bg-white/80 placeholder-gray-400 shadow"
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
          <input
            className="flex-1 px-4 py-3 rounded-lg border-2 border-indigo-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-900 bg-white/80 placeholder-gray-400 shadow"
            type="text"
            placeholder="Enter the description"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            required
          />
          <button
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg hover:from-pink-600 hover:to-indigo-600 active:scale-95 transition-all duration-150 border-2 border-pink-200 animate-pop-in"
            type="submit">
            Add Task
          </button>
        </form>
        <ul className="mt-6">
          {renderTask}
        </ul>
      </div>
    </div>
  );
}

export default App
