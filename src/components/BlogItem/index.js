import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {imageUrl, title, avatarUrl, topic, author, id} = blogData

  return (
    <Link to={`/blogs/${id}`} style={{textDecoration: 'none'}}>
      <li className="list">
        <img src={imageUrl} alt={title} className="image" />
        <div>
          <p>{topic}</p>
          <h2>{title}</h2>
          <div className="con">
            <img src={avatarUrl} alt={author} className="avatar" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
