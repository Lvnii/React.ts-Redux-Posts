import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { fetchUsers } from "../Store";
import { Link } from "react-router-dom";

const Friends = () => {
    const data = useAppSelector((state) => state.users.data)
    const status = useAppSelector((state) => state.users.status)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    if (status === 'failed') {
        return <div>Error Happened</div>
    }

    return (
        <div>
            {status === 'loading' && <p>Loading...</p>}
            <ul>
                {status === 'loaded' && data.map((item) => {
                    return (
                        <li key={item.id}>
                            <h2><Link to={`/profile/${item.id}`}>{item.name}-{item.email}</Link></h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Friends;