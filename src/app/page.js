import Add from "./components/add";
import { cookies } from "next/headers";

const getData = async (token) => {
if(token){
  const res = await fetch(`${process.env.HOST}/api/alls/mount`,{method:"POST",headers:{
    [token['name']]:JSON.stringify(token)
  }},{cache: 'no-store'});

  const data = await res.json();
 // console.log(data)
  return data;
}else{
  return{
    data:[]
  }
}
};

export default async function Home() { 
  const cookie=cookies().get('token');
  const datas=await getData(cookie);
  return (
    <main className="">
 <Add mounthName={datas['data']} />
    </main>
  );
}
