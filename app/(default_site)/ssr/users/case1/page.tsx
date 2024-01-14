//purse SSR ie Dynamic Rendering//this page will be built for every request
export const dynamic = "force-dynamic";

export default function Users() {
  const bio = "I am RAm";
  const timeVar = new Date().getTime().toString();

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Dynamic SSR</h1>
      <p className="text-xl text-center">Bio(variable) : {bio}</p>
      <p className="text-xl text-center">  TimeAfterEachRunOfThisCompoent (variable) : {timeVar}</p>
    </div>
  );
}
