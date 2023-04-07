
import { Collapse } from "antd";
import UserInfo from "./UserInfo";
import { FC } from "react";
const { Panel } = Collapse;
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
};
type UserPanel = {
  users: User[];
};
const UserPanel: FC<UserPanel> = ({ users }) => {
  return (
    <Collapse>
      {users.map((user) => {
        return (
          <Panel header={[user.name, ` @${user.username}`]} key={user.id}>
            <UserInfo user={user} />
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default UserPanel;
