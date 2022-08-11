import React from 'react'
import Back from '../common/back'
import CourseCard from "./CourseCard"
import "./course.css"

const courseHome = () => {
  return (
    <>
        <Back title='Explore courses' />
        <CourseCard />
    </>
  )
}

export default courseHome