import { IUser } from "../store/ducks/users/type";

export const Card = (user: IUser) => {
  console.log(user);
  return <div>{user.name.first}</div>;
};
