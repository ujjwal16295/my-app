import React from 'react'

export default function Alert(props) {
    function Capitalize(word){
        let firstWord=word.charAt(0).toUpperCase()
        let remaining=word.toLowerCase().slice(1)
        return firstWord+remaining
    }
  return (
    props.alerts && <div style={{height: '50px'}}>

<div class={`alert alert-${props.alerts.code} alert-dismissible fade show`} role="alert">
  <strong className='text-dark'>{Capitalize(props.alerts.code)}</strong> {props.alerts.message}
</div>

    </div>
  )
}
