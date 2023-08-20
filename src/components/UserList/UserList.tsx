import SingleUser from '../SingleUser/SingleUser';

import { SingleUserType } from '../../types/single-user';

import './UserList.css';

interface UserListProps {
    users: SingleUserType[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <ul className="user-list">
            {users.map(user => (
                <SingleUser
                    key={user.id}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    email={user.email}
                    avatar={user.avatar}
                />
            ))}
        </ul>
    )
}

export default UserList;