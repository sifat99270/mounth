import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const json = await req.json();
    const prisma = new PrismaClient();
    return NextResponse({ status: "fail", data: "pk" });
  } catch (e) {
    return NextResponse({ status: "fail", data: e });
  }
}
