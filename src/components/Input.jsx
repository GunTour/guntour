import React from 'react'

export const Input = (props) => {
  return (
    <input
      className="w-[468px] h-[60px] py-2 px-3 border-2 border-[#577D7B] rounded-md"
      onChange={props.onChange}
      id={props.id}
      placeholder={props.placeholder}
      type={props.type}
    />
  )
}

export const InputEmail = (props) => {
  return (
    <input
      className="h-[60px] w-[468px] py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder= "Email address"
      type={props.type}
    />
  )
}

export const InputPassword = (props) => {
  return (
    <input
      className="h-[60px] w-[468px] py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder= "Password"
      type={props.type}
    />
  )
}

export const InputFullNameLogin = (props) => {
  return (
    <input
      className="h-[60px] w-[468px] py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder= "Full Name"
      type={props.type}
    />
  )
}

export const InputFullNameRangers = (props) => {
  return (
    <input
      className="h-[60px] w-[996px] py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder= "Full Name"
      type={props.type}
    />
  )
}

export const InputPhoneNumber = (props) => {
  return (
    <input
      className="h-[60px] w-[468px] py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder= "+62 85797556122"
      type={props.type}
    />
  )
}

export const InputPlaceDateBirth = (props) => {
  return (
    <input
      className="h-[60px] w-[468px] py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder= "Sukabumi, 12 Oktober 2000"
      type="date"
    />
  )
}

export const InputGender = (props) => {
  return (
    <input
      className="h-[60px] w-[468px] py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder= "Laki-laki"
      type={props.type}
    />
  )
}

export const InputAddress = (props) => {
  return (
    <input
      className="h-[60px] w-[468px] py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      onChange={props.onChange}
      id={props.id}
      placeholder= "Jl. Legok Hangser"
      type={props.type}
    />
  )
}
