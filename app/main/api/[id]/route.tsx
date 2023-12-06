import { api } from "@/app/config";

interface Props {
    id: string;
}
export async function GET(request: any, params: Props) {
    const res = await fetch(api + '/product',)
    const data = await res.json()
    return Response.json({ data, id: params.id })
}

