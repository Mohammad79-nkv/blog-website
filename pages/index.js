import FeaturedPost from '../components/home_page/featured-post'
import {Fragment} from 'react'
import Hero from '../components/home_page/Hero'

export default function Home() {
  return (
    <Fragment>
      <Hero/>
      <FeaturedPost posts={}/>
    </Fragment>
  )
}
