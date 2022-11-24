import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import franceFlag from "../assets/france.png";
import spainFlag from "../assets/spain.png";
import switzerlandFlag from "../assets/switzerland.png";
import unitedKingdomFlag from "../assets/united-kingdom.png";
import { ApplicationState } from "../store";
import { setNationalities } from "../store/ducks/settings";
import { INationality } from "../store/ducks/settings/types";
import { setUserDetails } from "../store/ducks/users";

export const Settings = () => {
  const nationalitiesData = [
    {
      flag: switzerlandFlag,
      name: "Switzerland",
      abbreviation: "ch",
    },
    {
      flag: spainFlag,
      name: "Spain",
      abbreviation: "es",
    },
    {
      flag: franceFlag,
      name: "France",
      abbreviation: "fr",
    },
    {
      flag: unitedKingdomFlag,
      name: "United Kingdom",
      abbreviation: "gb",
    },
  ];
  const dispatch = useDispatch<any>();

  const { nationalities } = useSelector((state: ApplicationState) => state.SETTINGS);

  const [nationalitiesValue, setNationalitiesValue] = useState<INationality[]>(nationalities);

  const handleClick = (nationality: INationality) => {
    if (nationalitiesValue.filter((nat: INationality) => nat.name === nationality.name).length > 0)
      setNationalitiesValue(nationalitiesValue.filter((nat: INationality) => nat.name !== nationality.name));
    else setNationalitiesValue([...nationalitiesValue, nationality]);
    dispatch(setUserDetails(undefined));
  };

  useEffect(() => {
    dispatch(setNationalities(nationalitiesValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nationalitiesValue]);

  return (
    <div className="settings">
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="settings__header">
        <h2 className="settings__header-title">Settings</h2>
        <div className="settings__header-label">Select which nationalities are fetched for browsing/searching...</div>
      </div>
      <div className="settings__content">
        {nationalitiesData.map((nationality: INationality) => {
          const { flag, name } = nationality;
          const isActive = nationalitiesValue.filter((nat: INationality) => nat.name === name).length > 0;
          return (
            <button
              className={`settings__content-item ${isActive ? "active" : ""}`}
              onClick={() => handleClick(nationality)}
              aria-label={name}
            >
              <div className="settings__content-item--flag">
                <img src={flag} alt={name} />
              </div>
              <div className="settings__content-item--name">{name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
