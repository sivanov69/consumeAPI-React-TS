import { Descriptions, Button, Input, Space, Row, Col } from "antd";
import { User } from "./UsersPanel";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type UserInfoType = {
  user: User;
};

type InitalState = {
  username: string;
  email: string;
  street: string;
  suite: string;
  city: string;
};

const UserInfo: FC<UserInfoType> = ({ user }) => {
  const [userInfo, setUserInfo] = useState({
    username: user.username,
    email: user.email,
    street: user.address.street,
    suite: user.address.suite,
    city: user.address.city,
  });

  const [stateChanged, setStateChanged] = useState(false);

  const initialState: InitalState = {
    username: user.username,
    email: user.email,
    street: user.address.street,
    suite: user.address.suite,
    city: user.address.city,
  };

  const dirtyCheck = () => {
    if (JSON.stringify(initialState) !== JSON.stringify(userInfo)) {
      setStateChanged(true);
    } else {
      setStateChanged(false);
    }
  };
  const resetInfo = () => {
    setUserInfo(initialState);
  };
  const editInfo = (event: ChangeEvent<HTMLInputElement>, name: string) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  useEffect(() => {
    dirtyCheck();
  },);

  return (
    <Descriptions>
      <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
      <Descriptions.Item label="UserName">
        <Input
          value={userInfo.username}
          onChange={(e) => editInfo(e, "username")}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Email">
        <Input value={userInfo.email} onChange={(e) => editInfo(e, "email")} />
      </Descriptions.Item>
      <Descriptions.Item label="Street">
        <Input
          value={userInfo.street}
          onChange={(e) => editInfo(e, "street")}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Suite">
        <Input value={userInfo.suite} onChange={(e) => editInfo(e, "suite")} />
      </Descriptions.Item>
      <Descriptions.Item label="city">
        <Input value={userInfo.city} onChange={(e) => editInfo(e, "city")} />
      </Descriptions.Item>
      {stateChanged ? (
        <Row>
          <Col span={24}>
            <Space wrap>
              <Button type="primary">Save</Button>
              <Button type="primary" onClick={resetInfo} danger>
                Cancel
              </Button>
            </Space>
          </Col>
        </Row>
      ) : (
        ""
      )}
      <Row>
        <Col span={24}>
         <Link to={`/posts/${user.id}`}>See Posts</Link>
        </Col>
      </Row>
    </Descriptions>
  );
};

export default UserInfo;
