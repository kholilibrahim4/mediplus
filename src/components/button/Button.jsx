import React from 'react'

export default function Button({text,children,...spread}) {
  return (
    <button {...spread}>
        {children}
        {text}
    </button>
  )
}
