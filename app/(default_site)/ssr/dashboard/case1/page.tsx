import Container from "./Container";

export default function Dashboard() {
  return (
    <div className="p-4 ">
      <h1 id="welcome" className="text-xl text-center">
        Welcome to the Dashboard
      </h1>
      {/* //this container is need to for client components */}
      <Container />
    </div>
  );
}
