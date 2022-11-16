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
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/04/Dimond-wallpapers-HD-free-download.jpg" alt="" />
        <div class="middle">
    <h1>DD Lab Grown Diamond COMING SOON</h1>
    <hr/>
    <h4>Product Page is under construction</h4>
    <h5>We will be back soon</h5>
    </div>
    </div>
  )
}
