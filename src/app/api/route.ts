import { NextResponse } from "next/server";
import { Vector3 } from "three";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { target = new Vector3(0,0,0) }: {target : Vector3} = body;

  // 카메라 제어 막기 나중에
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ data: target });
}
