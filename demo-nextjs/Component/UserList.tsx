import { User } from "@/app/types/users";


const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
  }
  const data: User[] = await response.json();
  return data;
};

export const UserListSkeleton = () => {
    return (
        <div>
            {
                Array.from({length: 10}, (k,v) => (
                    <div key={v}>
                        <div className=""></div>
                    </div>
                ))
            }
        </div>
    )
}

const UserList = async() => {

    const users = await fetchUsers()

    return (
        <div>
        {
            users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
        ))}
        </div>

    )

}

export default UserList;