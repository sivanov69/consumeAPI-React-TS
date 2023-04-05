import React, { useEffect } from "react";
import { Col, Row, Collapse, Descriptions, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setUsers } from "../redux/slices/usersSlice";
import "./Users.css";

const Users = () => {
  const { Panel } = Collapse;
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch(setUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Row className="user-collapse">
      <Col span={8}>
        <Collapse defaultActiveKey={["1"]}>
          {users.map((user) => (
            <Panel header={[user.name, ` @${user.username}`]} key={user.id}>
              <Descriptions title="User Info">
                <Descriptions.Item label="User">
                  {user.username}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {user.email}
                </Descriptions.Item>
                <Descriptions.Item label="Street">
                  {user.address.street}
                </Descriptions.Item>
                <Descriptions.Item label="Suite">
                  {user.address.suite}
                </Descriptions.Item>
                <Descriptions.Item label="City">
                  {user.address.city}
                </Descriptions.Item>
              </Descriptions>
              <Button type="primary">See Posts</Button>
            </Panel>
          ))}
        </Collapse>
      </Col>
    </Row>
  );
};

export default Users;
