import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Space, Collapse } from "antd";
import "./UserPosts.css";
import UserSinglePost from "./UserSinglePost";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const { Panel } = Collapse;
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const UserPosts = () => {
  const params = useParams();
  const userId: number = Number(params.userId);
  const [singleUserPosts, setSingleUserPosts] = useState<Post[]>([]);
  const getPosts = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data = await res.json();
    setSingleUserPosts(data);
  }, [userId]);

  const users = useSelector((state: RootState) => state.users);
  const user = users.find((user) => user.id === userId);
  const deletePost = (id: number) => {
    setSingleUserPosts((prevState) => [
      ...prevState.filter((post) => post.id !== id),
    ]);
  };
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <section className="user-posts">
      {user ? (
        <Collapse>
          <Panel header={user.name} key={user.id}>
            <UserInfo user={user} />
          </Panel>
        </Collapse>
      ) : null}

      <Space direction="vertical" size={16}>
        {singleUserPosts.map((post) => {
          return (
            <UserSinglePost onDelete={deletePost} post={post} key={post.id} />
          );
        })}
      </Space>
    </section>
  );
};

export default UserPosts;
