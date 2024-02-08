import { cookies } from "next/headers";
import My from "../components/my";
async function person(token, mounthId) {
    const res = await fetch(`${process.env.HOST}/api/alls/my?mounthId=${mounthId}`, {
        method: "GET", headers: {
            [token['name']]: JSON.stringify(token)
        }
    }, { cache: 'no-store' });
    const result = await res.json()
    return result['data'];
}

export default async function page({ searchParams }) {
    const cookie = cookies().get('token');
    const mounthId = searchParams['id'];
    const name = searchParams['name'];

    const data = await person(cookie, mounthId)
    if (data instanceof Array && data.length > 0) {
        return (
            <div className="w-full gap-2 flex flex-col justify-center items-center p-2 bg-white shadow-lg shadow-gray-400">
                <p className=" font-extrabold text-emerald-600 bg-white shadow-md shadow-gray-400 rounded-md p-2">{name}</p>
                {data.map((item) => {
                    return (
                        <My persons={item} mounthId={item['mounthId']} key={item['id']} />
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>no data here</div>
        )
    }

}
