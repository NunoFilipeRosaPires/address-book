import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/ducks/users";
import { CardProps } from "./types";

export const Card = (props: CardProps) => {
  const { user } = props;
  const dispatch = useDispatch<any>();

  const handleClick = () => {
    dispatch(setUserDetails(user));
  };

  return (
    <button className="card" onClick={handleClick}>
      <div className="card-thumbnail">
        <img src={user.picture.thumbnail} alt={user.name.first + " " + user.name.last} width={48} height={48} />
      </div>
      <div className="card-content">
        <div className="card-content__user">
          <div className="card-content__user-name">{user.name.first + " " + user.name.last}</div>
          <div className="card-content__user-username">{user.login.username}</div>
        </div>
        <div className="card-content__email">{user.email}</div>
      </div>
    </button>
  );
};
