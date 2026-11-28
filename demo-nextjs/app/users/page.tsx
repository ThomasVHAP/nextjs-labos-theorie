import UserList, { UserListSkeleton } from "@/Component/UserList";
import { Suspense } from "react";

const Users = () => {
  try {

    return (
      <>
        <h1>Users List</h1>
        <Suspense fallback={UserListSkeleton()}>
            <UserList/>
        </Suspense>

      </>
    );
  } catch (error) {
    return <div>Error loading users.</div>;
  }
};

export default Users;