import React from 'react'
import { DetailedHTMLProps } from 'react'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const VisitBtn = (props: Props) => {
  return (
    <button {...props} />
  )
}

export default VisitBtn