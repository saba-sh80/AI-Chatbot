export default function Sidebar() {
  return (
    <div className="basis-1/4 flex flex-col gap-y-3 bg-slate-200 border-r border-r-slate-400 px-3">
      <div className="flex justify-between items-center px-5 py-4">
        <div>
          <img
            className="w-8 h-8 cursor-pointer"
            src="./Icons/hamburger-menu.png"
            alt="hamburger menu Icon"
          />
        </div>
        <div className="w-40 relative border border-slate-300 bg-slate-50 rounded-xl">
          <div className="absolute inset-y-0 inset-e-2 flex items-center">
            <img
            className="w-5 h-5 cursor-pointer"
            src="./Icons/search-icon.png"
            alt="Search Icon"
          />
          </div>
          <input className="w-40 p-1 rounded-md placeholder:px-2" type="text" placeholder="search..."/>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 px-5 py-3 bg-blue-200 rounded-md">
        <img className="w-6 h-6" src="./Icons/message.png" alt="message" />
        <a className="cursor-pointer font-semibold text-blue-600" href="#">
          New Chat
        </a>
      </div>
      <div>
        <ul className="flex flex-col gap-y-3 justify-center items-center border-b border-t border-slate-400 py-4">
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
            <img className="w-6 h-6" src="./Icons/images.png" alt="images" />
            <a className="cursor-pointer font-semibold" href="#">Images</a>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
             <img className="w-6 h-6" src="./Icons/library.png" alt="library" />
            <a className="cursor-pointer font-semibold" href="#">Library</a>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
            <img className="w-6 h-6" src="./Icons/projects.png" alt="projects" />
            <a className="cursor-pointer font-semibold" href="#">Projects</a>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
            <img className="w-6 h-6" src="./Icons/remote.png" alt="remote" />
            <a className="cursor-pointer font-semibold" href="#">Remote</a>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
            <img className="w-6 h-6" src="./Icons/scheduled.png" alt="scheduled" />
            <a className="cursor-pointer font-semibold" href="#">Scheduled</a>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
            <img className="w-6 h-6" src="./Icons/plugins.png" alt="plugins" />
            <a className="cursor-pointer font-semibold" href="#">Plugins</a>
          </div>
        </ul>
      </div>
    </div>
  );
}
