import React from 'react'
import { Link } from 'react-router-dom';
import "./404Page.css";

export default function Page() {
  return (
    <div>
        <div class="topleft">
    <Link className='link' to={"/"}>
    <h3>Back</h3>
    </Link>
  </div>
        <div class="middle">
    <h1>DD Lab Grown Diamond COMING SOON</h1>
    <h4 className='hcolor'>Product Page is under construction </h4>
    <h6 className='hcolor'>We will be back soon</h6>
    </div>
    </div>
  )
}
