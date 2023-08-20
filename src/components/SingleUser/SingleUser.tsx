import './SingleUser.css';

interface SingleUserProps {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const SingleUser: React.FC<SingleUserProps> = ({
    email,
    first_name,
    last_name,
    avatar
}) => {
    return (
        <li className="user-card">
            <header className="user-card-header">
                <img
                    src={avatar}
                    alt={`${first_name} ${last_name} avatar`}
                    title={`${first_name} ${last_name}`}
                />
            </header>
            <main className="user-card-body">
                <h3 className="user-name">{first_name} {last_name}</h3>
            </main>
            <footer className="user-card-footer">
                <p className="user-email">{email}</p>
            </footer>
        </li>
    )
}

export default SingleUser;