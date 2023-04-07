import React, { useState } from "react";
import { FC } from "react";
import { Post } from "./UserPosts";
import { Card, Button, Modal } from "antd";

type SinglePost = {
  post: Post;
  onDelete: (id:number)=>void
};

const UserSinglePost: FC<SinglePost> = ({ post, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Card
      title={post.title}
      extra={<Button onClick={showModal}>Delete</Button>}
    >
      <p>{post.body}</p>
      <Modal
        title="Delete Post"
        open={isModalOpen}
        onOk={()=>onDelete(post.id)}
        onCancel={handleCancel}
      >
        <p>Please confirm that you want to delete "{post.title}"</p>
      </Modal>
    </Card>
  );
};

export default UserSinglePost;
