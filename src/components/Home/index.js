/* eslint-disable react/no-unknown-property */
import UserInfo from '../UserInfo'

import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div className="home-container" testid="loader">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
