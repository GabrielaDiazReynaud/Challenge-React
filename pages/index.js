import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '../comps/Form'
import TaskListing from '../comps/TaskListing'
import { useEffect, useState } from 'react'
import axios from "axios";


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [tasksList, setTaskList] = useState([]);
  useEffect(()=>{
    axios.get(`https://us-central1-challenge-app-eb721.cloudfunctions.net/helloWorld/tasks`).then((response) => { 
    setTaskList(response.data);
    });

  },[]);


  return ( 
   <div  className="widthGeneral m-auto mt-4">
  <h1 id="title" className="text-center">Lista De <span className="spanCss">Quehaceres</span></h1>
  <div className="headerTitleContainer px-4 py-4 m-2">
     <Form tasksList={tasksList} setTaskList={setTaskList}></Form>
  </div>
  <TaskListing tasksList={tasksList} setTaskList={setTaskList}></TaskListing>
</div> 
  )
}
