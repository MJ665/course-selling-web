"use client"
import {signIn, signOut} from "next-auth/react"

import { useSession } from "next-auth/react";
export const Appbar = ()=>{
const session  = useSession ()

    return (
        <>
        <div>
            <button onClick={()=>{signIn()}}>Sign IN </button>
            <button onClick={()=>{signOut()}}>Sign Out</button>
        </div>
        <div>
      {JSON.stringify(session.data?.user)}
    </div>
        </>
    )
}