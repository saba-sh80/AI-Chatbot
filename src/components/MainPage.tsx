
import ChatBox from "./ChatBox";
import Typingbox from "./Typingbox";

export default function MainPage() {
  return (
    <div className="basis-3/4 grid justify-center gap-y-4 bg-slate-200 py-7">
      <div className="w-225 flex justify-center">
        <h1 className="text-slate-700 font-bold text-4xl">
          Welcome to AI CHATBOX
        </h1>
      </div>
      <ChatBox/>
      <Typingbox />
    </div>
  );
}
