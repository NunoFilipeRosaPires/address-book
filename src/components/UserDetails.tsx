import { faArrowLeft, faCakeCandles, faEnvelope, faLocationDot, faPhone, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../store";
import { setUserDetails } from "../store/ducks/users";

export const UserDetails = () => {
  const dispatch = useDispatch<any>();
  const { user } = useSelector((state: ApplicationState) => state.USERS);

  const basicDetails = [
    {
      icon: faEnvelope,
      title: user?.email,
    },
    {
      icon: faPhone,
      title: user?.cell,
    },
    {
      icon: faPhone,
      title: user?.phone,
    },
    {
      icon: faLocationDot,
      title:
        user?.location.street.name +
        " " +
        user?.location.street.number +
        ", " +
        user?.location.postcode +
        " " +
        user?.location.state +
        ", " +
        user?.location.country,
    },
    {
      icon: faCakeCandles,
      title: new Date(user?.dob.date!).toLocaleString("en"),
    },
  ];

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1200);

  const handleBackClick = () => {
    setIsOpened(false);
    setTimeout(() => dispatch(setUserDetails(undefined)), 500);
  };

  useEffect(() => {
    if (user) setIsOpened(true);
  }, [user]);

  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", checkMobileScreen);
    return () => window.removeEventListener("resize", checkMobileScreen);
  }, []);

  return (
    <>
      {!user && !isMobile ? (
        <div className="choose-user">
          <FontAwesomeIcon icon={faUsers} />
          <div>Show user details!</div>
        </div>
      ) : (
        <div className={`user-details ${isOpened ? "active" : ""}`}>
          <button className="user-details__back-btn" onClick={handleBackClick} aria-label="go back">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="user-details__header">
            <div className="user-details__header-img">
              <img src={user?.picture.medium} aria-label={user?.name.first + " " + user?.name.last} />
            </div>
            <div className="user-details__header-user">
              <div className="user-details__header-user--name">{user?.name.first + " " + user?.name.last}</div>
              <div className="user-details__header-user--username">{user?.login.username}</div>
            </div>
          </div>
          <div className="user-details__header-tags">
            <div className="gender">{user?.gender}</div>
            <div className="age">{user?.dob.age}</div>
            <div className="country">{user?.location.country}</div>
          </div>
          <div className="user-details__basic">
            <h2>Basic Details</h2>
            <div className="user-details__basic-content">
              {basicDetails.map((detail, index: number) => {
                return (
                  <div className="user-details__basic-content--item" key={index}>
                    <FontAwesomeIcon icon={detail.icon} />
                    <span>{detail.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
