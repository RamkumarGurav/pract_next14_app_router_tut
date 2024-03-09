export default function PageName() {
  return (
    <div className="py-4 px-2">
      <div className="notificationContainer  p-6 max-w-[400px] mx-auto bg-white rounded-xl  shadow-lg border border-zinc-300 flex items-center space-x-4">
        <div className="shrink-0 font-bold text-2xl">
          {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
          LOGO
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}
