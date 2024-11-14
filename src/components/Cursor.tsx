"use client";

import React, { useEffect } from 'react'
import {gsap} from 'gsap'
export default function Cursor() {
    useEffect(() => {
        const cursor = document.getElementById("custom-cursor");
        const links = document.querySelectorAll("a");
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        //const cursorText = document.querySelector(".cursor-text") ;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        const onMouseMove = (event: MouseEvent) => {
            const {clientX, clientY} = event;
            gsap.to(cursor,{x: clientX, y: clientY})
        } 
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        const onMouseEnterLink = (event: MouseEvent) => {
            const link = event.target as Element | null;
            if (link && link.classList.contains("view")) {
                gsap.to(cursor, {scale: 4})
                //cursorText.style.display = "block"
            }else {
                gsap.to(cursor, {scale: 4})
            }
        }

        const onMouseLeave = () => {
            gsap.to(cursor, {scale:1})
            //cursorText.style.display = "none";
        }

        document.addEventListener("mousemove", onMouseMove)
        links.forEach(link => {
            link.addEventListener("mouseenter", onMouseEnterLink)
            link.addEventListener("mouseleave", onMouseLeave)
        })
    })
  return (
    <div id="custom-cursor" className="custom-cursor">
        <span className='cursor-text'>View</span>
    </div>
  )
}
