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
        {/* <Avatar avatar={avatar} /> */}
        <AvatarArea avatar={avatar}>
          {({ avatar }) => (
            <>
              <Avatar avatar={avatar} />
            </>
          )}
        </AvatarArea>
        <Form />
      </div>
      <Image 
        src="/pic/catdog.png" 
        alt="posa doggo"
        height={900}
        width={900}
        className="relative bottom-88 left-1/2 -translate-x-1/2 pointer-events-none"
      /> {/* HUGE LOWER CENTERED ANIMALS  */}
      <Users onChangeAvatar={handleChangeAvatar} /> {/* POSITION ABSOLUTE ON LOWER LEFT */}
    </div>
  )
}

function Icon({ outerSize, outerBW, innerSize, top, bottom }) {
  return (
    <div 
      style={{ width: outerSize, height: outerSize, borderWidth: outerBW, }} 
      className="relative overflow-hidden mx-auto bg-white border-white rounded-full"
    >
      <div style={{ width: innerSize, height: innerSize, top: top }} className="absolute bg-newRed rounded-full left-1/2 -translate-x-1/2"></div>
      <div style={{ bottom: bottom }} className="absolute bg-newRed w-10/12 h-1/2  left-1/2 -translate-x-1/2 rounded-t-full"></div>
    </div>
  )
}

function Avatar({ avatar }) {
  return (
    <div className={`relative mx-auto`}>
      <Icon outerSize={28*4} outerBW={8} innerSize={12*4} top={2*4} bottom={-4*4} />
      <p className="text-xl font-bold">
        {avatar}
      </p>
    </div>
  )
}

function AvatarArea({ children, avatar }) {
  return (
    <div className="text-center space-y-2">
      {children({ avatar: avatar })}
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
          <Icon outerSize={10*4} outerBW={2} innerSize={4*4} top={1*4} bottom={-1*4} />
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
