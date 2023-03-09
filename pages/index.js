import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '../comps/Form'
import TaskListing from '../comps/TaskListing'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div  className="widthGeneral m-auto mt-4">
        <h1 id="title" className="text-center">Lista De <span className="spanCss">Quehaceres</span></h1>
        <div class="headerTitleContainer px-4 py-4 m-2">
           <Form></Form>
        </div>
        <TaskListing></TaskListing>
    </div>
  )
}
