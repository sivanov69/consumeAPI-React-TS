import React, { useCallback, useEffect, useState } from "react";
import { Col, Row } from "antd";
import UserPanel from "./UsersPanel";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setUsers } from "../redux/slices/usersSlice";
import "./Users.css";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const getUsers = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch(setUsers(data));
  }, [dispatch]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (users.length) {
      setIsLoading(false);
    }
  }, [users]);
  return (
    <section className="main">
      <h1>Welcome to our database</h1>
      <Row className="user-collapse">
        <Col span={8}>
          {isLoading ? <p>Loading</p> : <UserPanel users={users} />}
        </Col>
      </Row>
    </section>
  );
};

export default Users;
