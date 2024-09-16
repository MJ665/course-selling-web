import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";


import { Appbar } from "./App";
export default function Home(){
  const session  = useSession ()
  return (


<>
<Appbar></Appbar>



</>)
  }