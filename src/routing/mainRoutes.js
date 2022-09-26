import React, {lazy} from 'react'

const Home = lazy( () => import("../Pages/Home"));
const Category = lazy( () => import("../Pages/Category"));
const Preview = lazy( () => import("../Pages/Preview"));

export const routes = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/category',
    element: <Category/>
  },
  {
    path: '/preview',
    element: <Preview/>
  }
]
