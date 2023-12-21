import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify, importJWK } from 'jose';

export function middleware(request: NextRequest) {
    try {
        const token = request.cookies.get('token')?.value;
        console.log(token)
        return NextResponse.next()
    } catch (error) {
        return NextResponse.redirect(new URL('/', request.url))
    }

}
export const config = {
    matcher: '/admin/:path*'
}