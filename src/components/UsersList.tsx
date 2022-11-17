import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../store";
import { getUsersList } from "../store/ducks/users/thunks";
import { IUser } from "../store/ducks/users/type";
import { Card } from "./Card";

export const UsersList = () => {
  const batchSize = 50;
  const maxUsers = 1000;

  const dispatch = useDispatch<any>();

  const { usersList, usersListLoaded } = useSelector(
    (state: ApplicationState) => state.USERS
  );

  const [searchInput, setSearchInput] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useLayoutEffect(() => {
    if (usersList.length < maxUsers)
      dispatch(getUsersList({ batchSize: batchSize, page: page }));
  }, [page]);

  return (
    <div className="users-list">
      <div className="users-list__search">
        <input
          value={searchInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
          placeholder="Search Users..."
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="users-list__content">
        {usersList.map((user: IUser) => {
          return <Card {...user} />;
        })}
      </div>
    </div>
  );
};
