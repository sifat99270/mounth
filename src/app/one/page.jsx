import { cookies } from "next/headers";


// const getData = async (token, id) => {
//     if (token) {
//         const res = await fetch(`${process.env.HOST}/api/alls/mount`, {
//             method: "POST", headers: {
//                 [token['name']]: JSON.stringify(token)
//             }
//         }, { cache: 'no-store' });

//         const data = await res.json();
//         // console.log(data)
//         return data;
//     } else {
//         return {
//             data: []
//         }
//     }
// };

export async function page({ }) {
    // const id = searchParams['id']
    // const cookie = cookies().get('token')
    // const data = await getData()
    return (
        <div>
            this all page
        </div>
    )
}
