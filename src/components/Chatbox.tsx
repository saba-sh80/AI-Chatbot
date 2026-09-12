import Answerbox from "./Answerbox";
import Typingbox from "./Typingbox";

export default function Chatbox() {
  return (
    <div className="grid col-span-4 justify-center content-between bg-slate-100 py-7">
      <div className="flex justify-center">
        <h1 className="text-slate-700 font-bold text-4xl">
          Wellcome to AI CHATBOX
        </h1>
      </div>
      <Answerbox/>
      <Typingbox />
    </div>
  );
}
