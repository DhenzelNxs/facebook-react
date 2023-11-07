import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Adonias",
          avatar: "https://i.pravatar.cc/150?img=1",
        },
        date: "7 nov 2023",
        content: "Testando se o post funcionou",

        comments: [
          {
            id: 2,
            author: {
              name: "Dhenzel",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4",
            },
            date: "7 nov 2023",
            content: "Deu não",
          },
        ],
      },
    ],
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
