
async function fetchData(){

  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  const data=await res.json()
return data
}

export default async function PageName() {

  const products= await fetchData()


  return (
    <div>PageName</div>
  );
}