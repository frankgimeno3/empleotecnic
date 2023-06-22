import {NextResponse} from 'next/server'

export function GET(){
    
    return NextResponse.json({message: "testamos que funciona /Api/hello"})
}