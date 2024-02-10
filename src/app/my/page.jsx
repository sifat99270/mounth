import Link from "next/link";
import My from "../components/my";
import { cookies } from "next/headers";


async function Page() {
  async function getData(token) {
    if (token) {
      const res = await fetch(`${process.env.HOST}/api/alls/mount`, {
        method: "POST", headers: {
          [token['name']]: JSON.stringify(token)
        }
      }, { cache: 'no-store' });
      const result = await res.json()
      return result['data'];
    } else {
      return {
        data: []
      }
    }

  }

  const cookie = cookies().get('token');
  const allMounth = await getData(cookie);

  if (allMounth instanceof Array && allMounth.length > 0) {
    return (
      <div className=" w-1/2 rounded-lg mx-auto p-2 flex flex-col gap-3 justify-center items-center bg-white shadow-lg shadow-gray-400">
        {allMounth.map((item, i) => {
          return (<Link key={item['id']} href={`/all?id=${item['id']}&&name=${item['name']}`} className="w-full">
            <div className=" flex justify-center items-center w-full h-12 rounded-md shadow-lg text-white font-extrabold text-xl bg-slate-300 hover:bg-teal-400">{item['name']}</div>
          </Link>
          )
        })}
      </div>
    )
  } else {
    return <p>
      no data here
    </p>
  }
}

export default Page;
