import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '../comps/Form'
import TaskListing from '../comps/TaskListing'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <div >
        <h1>Lista De <span>Quehaceres</span></h1>
        <div>
           <Form></Form>
        </div>
        <TaskListing></TaskListing>
    </div>
    </div>
  )
}
