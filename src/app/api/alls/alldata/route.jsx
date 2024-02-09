import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    try {
        const prisma = new PrismaClient()

        const data = await prisma.user.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true
            }
        });
        return NextResponse.json({ status: "success", data: data })
    } catch (e) {
        return NextResponse.json({ status: "fail", data: [] })
    }
}