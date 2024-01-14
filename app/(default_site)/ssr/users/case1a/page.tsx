
//purse SSR ie Dynamic Rendering//this page will be built for every request
export const dynamic = "force-dynamic";

export default function Users() {
  const bio = "I am RAm";
  const timeVar = new Date().getTime().toString();
  const getTime = () => {
    return new Date().getTime().toString();
  };
  //to check whether Server component runs during hydration
  const timeVar2 = getTime();
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">
       Dynamic SSR
      </h1>
      <p className="text-xl text-center">Bio(variable) : {bio}</p>
      <p className="text-xl text-center">currentTime(variable) : {timeVar}</p>
      <p className="text-xl text-center">
        currentTime using Function(variable) : {timeVar2}
      </p>
    </div>
  );
}
