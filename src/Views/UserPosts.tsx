import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserPosts.css";

type Post = {
    userId: number;
    id: number;
    title: string,
    body: string;
}

const UserPosts = () => {
  const params = useParams(); 
  const [singleUserPosts, setSingleUserPosts] = useState<Post[]>([])
  const getPosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`
    );
    const data = await res.json();
    setSingleUserPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return <p>{singleUserPosts.map(post => post.id)}</p>;
};

export default UserPosts;
