
import { data } from 'autoprefixer';
import { cookies } from 'next/headers';
import Link from 'next/link'
import React from 'react'

const getData = async (token) => {
    if (token) {
        const res = await fetch(`${process.env.HOST}/api/alls/alldata`, {
            method: "GET", headers: {
                [token['name']]: JSON.stringify(token)
            }
        }, { cache: 'no-store' });

        const data = await res.json();
        return data['data'];
    } else {
        return {
            data: []
        }
    }
};


export default async function page() {
    const cookie = cookies().get('token')
    const datas = await getData(cookie)
    if (datas instanceof Array && datas.length > 0) {
        return (
            datas.map((item) => {
                return (<div className='  flex items-center justify-center flex-col' key={item['id']} >
                    <Link href=''>
                        <div className=' flex justify-center items-center  font-extrabold text-white text-2xl w-96  h-10  bg-slate-600 rounded-md shadow-md shadow-gray-200'>{item['firstName']}</div>
                    </Link>
                </div>)
            })
        )
    } else {
        <div>
            no data here
        </div>
    }
}
