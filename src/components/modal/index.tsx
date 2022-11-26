import React from "react"
import style from "./style.module.scss"

type ModalProps = {
  children: React.ReactNode
  title: string
  onClose: () => void
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div className={style.modalBackgroud} onClick={onClose} />
      <div className={style.modalContainer}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  )
}
