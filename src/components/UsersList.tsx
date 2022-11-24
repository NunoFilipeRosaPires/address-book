import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../store";
import { INationality } from "../store/ducks/settings/types";
import { clearUsersList } from "../store/ducks/users";
import { getUsersList } from "../store/ducks/users/thunks";
import { IUser } from "../store/ducks/users/types";
import { Card } from "./Card";

export const UsersList = () => {
  const batchSize = 50;
  const maxUsers = 1000;

  const dispatch = useDispatch<any>();

  const listRef = useRef<any>();

  const { usersList, usersListLoaded } = useSelector((state: ApplicationState) => state.USERS);
  const { nationalities } = useSelector((state: ApplicationState) => state.SETTINGS);

  const [searchInput, setSearchInput] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [reachedLimit, setReachedLimit] = useState<boolean>(false);

  const getUsersBySearch = () => {
    if (!searchInput) return usersList;
    return usersList.filter((user: IUser) => {
      const name = user.name.first.toLowerCase() + " " + user.name.last.toLowerCase();
      return name.includes(searchInput.toLowerCase());
    });
  };

  useLayoutEffect(() => {
    if (usersList.length < maxUsers)
      dispatch(
        getUsersList({
          batchSize: batchSize,
          page: page,
          nationalities: nationalities.map((nat: INationality) => nat.abbreviation).join(","),
        })
      );
    else setReachedLimit(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const nextPageData = () => {
      const child = listRef.current.children[0];
      const childRect = child.getBoundingClientRect();
      if (childRect.height + childRect.top < window.innerHeight && usersListLoaded && searchInput === "") setPage(page + 1);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    const listElement = listRef.current;

    listElement.addEventListener("scroll", nextPageData);

    return () => listElement.removeEventListener("scroll", nextPageData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, usersListLoaded, searchInput]);

  useEffect(() => {
    return () => dispatch(clearUsersList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className="users-list__content" ref={listRef}>
        <div className="users-list__content-grid">
          {getUsersBySearch().map((user: IUser, index: number) => {
            return <Card user={user} key={index} />;
          })}
        </div>
        {!usersListLoaded && <div className="loading">loading...</div>}
        {reachedLimit && <div className="loading">End of users catalog</div>}
      </div>
    </div>
  );
};
