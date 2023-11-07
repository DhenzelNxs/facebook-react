import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postList">
        {posts ? (
          posts.map((post) => <PostItem key={post.id} {...post} />)
        ) : (
          <h1>Não há posts</h1>
        )}
      </div>
    );
  }
}

export default PostList;
