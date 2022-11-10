import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItems()
  }

  getBlogItems = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()
    const formData = data.map(each => ({
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      content: each.content,
      author: each.author,
      topic: each.topic,
      id: each.id,
    }))
    this.setState({blogsData: formData, isLoading: false})
  }

  render() {
    const {blogsData} = this.state
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader height={50} width={50} color="#00BFFF" type="TailSpin" />
        ) : (
          blogsData.map(each => <BlogItem key={each.id} blogData={each} />)
        )}
      </div>
    )
  }
}

export default BlogList
