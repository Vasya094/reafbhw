import React, { useState, useEffect } from "react"
import ClickForm from "./ClickForm"
import firebaseDb from "../firebase"

const Count = () => {
  var [count, setCount] = useState(0)

  useEffect(() => {
    firebaseDb.child("clicks/count").on("value", (snapshot) => {
      if (snapshot.val() != null) setCount(snapshot.val())
    })
  }, [])

  const addOrEdit = (count) => {
    setCount(count)
    firebaseDb.child(`clicks/count`).set(count, (err) => {
      if (err) console.log(err)
    })
  }

  return (
    <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4 text-center'>Count: {count}</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5'>
          <ClickForm {...{ addOrEdit, count }} />
        </div>
      </div>
    </>
  )
}

export default Count
