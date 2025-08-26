import React from 'react'
import { Layout } from '../../shared/component/Layout'
import { LoveCompassion } from '../../component/LoveCompassion'
import { Benefits } from '../../component/Benefits'
import { Team } from '../../component/Team'

export const AboutUsPage = () => {
  return (
   <>
   <Layout>
    <LoveCompassion />
    <Benefits />
    <Team />
   </Layout>
   </>
  )
}
