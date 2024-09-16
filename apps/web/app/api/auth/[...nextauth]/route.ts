import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import  CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{label:"email", type:"text", placeholder:"enter your email"},
                password:{label :"password", type:"password", placeholder:"enter your password"}
            }, async  authorize(credentials:any) {
                return {
                    id :"user1"
                }
            }
        })
    ], 
    secret:process.env.NEXTAUTH_SECRET

})

export {handler as GET , handler as POST}






// import { NextRequest, NextResponse } from "next/server";
// export function GET ( req:NextRequest, {params}:{params:{nextauth:string[]}}){
//     console.log(params.nextauth[0])
//     return NextResponse.json({
//         msg:"we got the request",
//         params:params.nextauth[0]
//     })
// }
