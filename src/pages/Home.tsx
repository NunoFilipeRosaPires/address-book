import { UserDetails, UsersList } from "../components";

export const Home = () => {
  return (
    <div className="homepage">
      <UsersList />
      <UserDetails />
    </div>
  );
};
