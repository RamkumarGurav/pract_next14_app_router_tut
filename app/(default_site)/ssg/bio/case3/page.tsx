
export default function Case3() {
  const bio = "I am RAm";
  const timeVar = new Date().getTime().toString();

  return (
    <div>
      <h1 className="text-4xl text-center">
        This is Bio Page (default server component page acts as SSG)
      </h1>
      <p className="text-xl text-center">Bio(variable) : {bio}</p>
      <p className="text-xl text-center">currentTime(variable) : {timeVar}</p>
    </div>
  );
}
