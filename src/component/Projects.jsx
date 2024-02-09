import React from 'react'
import Button from './Button'
import photo1 from "../assets/Untitled design (1).png"
import photo2 from "../assets/Untitled design.png"
import photo3 from "../assets/Untitled design (2).png"
import photo5 from "../assets/Untitled design (3).png"
import photo4 from "../assets/Untitled design (4).png"

const projects_data = [
  {
    title: "HooBank",
    para: "I’ve worked with some great clients, but I won’t blab about them all. Here are a few best bits.",
    photo: photo1,
    link:"https://aryanmalla19.github.io/hooBank_react"
  },
  {
    title: "OpenAI- GPT3",
    para: "I’ve worked with some great clients, but I won’t blab about them all. Here are a few best bits.",
    photo: photo2,
    link:"https://aryanmalla19.github.io/gpt3_react"
  },
  {
    title: "Hemaj Online Shopping",
    para: "I’ve worked with some great clients, but I won’t blab about them all. Here are a few best bits.",
    photo: photo3,
    link:"https://aryanmalla19.github.io/hema"
  },
  {
    title: "Bitcoin Blog",
    para: "I’ve worked with some great clients, but I won’t blab about them all. Here are a few best bits.",
    photo: photo4,
    link:"https://aryanmalla19.github.io/bitcoin_website"
  },
  {
    title: "Camp On The Court",
    para: "I’ve worked with some great clients, but I won’t blab about them all. Here are a few best bits.",
    photo: photo5,
    link:"https://aryanmalla19.github.io/camponthecourt"
  }
]

export default function Projects() {
  return (
    <div className='w-9/12 mx-auto'>
      {projects_data.map(e => {
        return (
          <a href={e.link} target='_blank'>
          <div className='mb-20'>
            <img className='w-full' src={e.photo} alt="" />
            <h1 className='text-4xl font-bold text-main ml-1 mt-6'>{e.title}</h1>
            <p className='text-lg text-main my-2'>{e.para}</p>
            <Button name="View Live" stats={`${false}`} />
          </div>
          </a>
        )
      })}
    </div>
  )
}
