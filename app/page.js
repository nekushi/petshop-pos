"use client"

import { useState } from "react"

import Image from "next/image"

const userTypes = [
  { id: "1", user: "Admin Access", type: "admin", },
  { id: "2", user: "Pet Shop Clerk", type: "clerk", },
]

export default function LoginPage() {
  const [ avatar, setAvatar ] = useState(userTypes[0].user)

  const handleChangeAvatar = (user) => {
    setAvatar(user)
  }
  
  return (
    <div className="bg-newRed h-screen overflow-hidden text-white">
      <div className="mt-16 mx-auto flex flex-col justify-center items-center w-1/4 space-y-8 overflow-hidden">
        <Avatar avatar={avatar} />
        <Form />
      </div>
      <Image 
        src="/pic/catdog.png"
        alt="posa doggo"
        height={900}
        width={900}
        className="relative bottom-88 left-1/2 -translate-x-1/2 pointer-events-none"
      />
      <Users onChangeAvatar={handleChangeAvatar} />
    </div>
  )
}

function Avatar({ avatar }) {
  return (
    <div className="text-center space-y-2">
      <LargerIcon />
      <p className="text-xl font-bold">
        {avatar}
      </p>
    </div>
  )
}

function Form() {
  return (
    <form 
      action="" 
      onClick={e => {e.preventDefault()}}
      className="w-full text-center space-y-8"
    >
      <label htmlFor="">
        <input 
          type="text" 
          placeholder="Username"
          className="text-black indent-2 w-full p-1 rounded-md shadow-inner shadow-gray-400" />
        <br />
        <p className="font-bold text-sm">Username</p>
      </label>
      <br />
      <label htmlFor="">
        <input 
          type="password" 
          placeholder="Password"
          className="text-black indent-2 w-full p-1 rounded-md shadow-inner shadow-gray-400" />
        <br />
        <p className="font-bold text-sm">Password</p>
      </label>
      <input 
        type="submit" 
        value="Sign in" 
        className="bg-white text-darkRed font-bold px-6 py-3 rounded-xl shadow-md shadow-gray-500 hover:bg-slate-200 active:bg-slate-300"
      />
    </form>
  )
}

function Users({ onChangeAvatar }) {
  return (
    <div className="absolute bottom-16 left-16 space-y-4">
      {userTypes.map(user => (
        <div 
          key={user.id}
          className="flex gap-5 items-center"
        >
          <SmallerIcon />
          <p
            onClick={() => {onChangeAvatar(user.user)}}
            className="hover:underline hover:underline-offset-4 hover:cursor-pointer"
          >
            {user.user}
          </p>
        </div>
      ))}
    </div>
  )
}

function LargerIcon() {
  return (
    <div className={`relative overflow-hidden mx-auto bg-white size-28 border-8 border-white rounded-full`}>
      <div className={`absolute bg-newRed size-12 rounded-full top-2 left-1/2 -translate-x-1/2`}></div>
      <div className={`absolute bg-newRed w-10/12 h-1/2 -bottom-4 left-1/2 -translate-x-1/2 rounded-t-full`}></div>
    </div>
  )
}

function SmallerIcon() {
  return (
    <div className={`relative overflow-hidden bg-white size-10 border-2 border-white rounded-full`}>
      <div className={`absolute bg-newRed size-4 rounded-full top-1 left-1/2 -translate-x-1/2`}></div>
      <div className={`absolute bg-newRed w-10/12 h-1/2 -bottom-1 left-1/2 -translate-x-1/2 rounded-t-full`}></div>
    </div>
  )
}

