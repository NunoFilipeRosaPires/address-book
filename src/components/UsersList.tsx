import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../store";
import { getUsersList } from "../store/ducks/users/thunks";
import { IUser } from "../store/ducks/users/types";
import { Card } from "./Card";

export const UsersList = () => {
  const batchSize = 50;
  const maxUsers = 1000;

  const dispatch = useDispatch<any>();

  const { usersList, usersListLoaded } = useSelector((state: ApplicationState) => state.USERS);

  const [searchInput, setSearchInput] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const getUsersBySearch = () => {
    if (!searchInput) return usersList;
    return usersList.filter((user: IUser) => {
      const name = user.name.first.toLowerCase() + " " + user.name.last.toLowerCase();
      return name.includes(searchInput.toLowerCase());
    });
  };

  useLayoutEffect(() => {
    if (usersList.length < maxUsers) dispatch(getUsersList({ batchSize: batchSize, page: page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="users-list">
      <div className="users-list__search">
        <input
          value={searchInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
          placeholder="Search Users..."
        />
        <button aria-label="Search button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="users-list__content">
        {getUsersBySearch().map((user: IUser, index: number) => {
          return <Card user={user} key={index} />;
        })}
      </div>
    </div>
  );
};
