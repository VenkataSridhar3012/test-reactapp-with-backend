import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./index.css";

type SidebarItemProps = {
  eachItem: {
    id: string;
    displayText: string;
    icon: string;
    path: string;
    subOptions?: {
      id: string;
      displayText: string;
      path: string;
    }[];
  };
  isActive: boolean;
};

const SidebarItem = (props: SidebarItemProps) => {
  const [subOption, setSubOption] = useState<boolean>(false);
  const { eachItem, isActive } = props;

  const onSubOptionClick = () => {
    setSubOption(!subOption);
  };

  const activeClass = isActive ? "active-option" : "";
  const activeText = isActive ? "active-text" : "";

  return (
    <>
      <Link className="link" to={eachItem.path}>
        <li
          onClick={onSubOptionClick}
          className={`active sidebar-item ${activeClass}`}
        >
          <img src={eachItem.icon} alt="icon" />
          <span className={`sidebar-item-text ${activeText}`}>
            {eachItem.displayText}
          </span>
          {eachItem.subOptions && subOption ? (
            <span className="arrow-icon">
              <IoIosArrowUp size={20} />
            </span>
          ) : eachItem.subOptions ? (
            <span className="arrow-icon">
              <IoIosArrowDown size={20} />
            </span>
          ) : null}
        </li>
        <ul className="sub-options-list">
          {subOption &&
            eachItem.subOptions?.map((eachSubOption) => {
              return (
                // <Link className="link" to={`${eachSubOption.path}`}>
                <li className="sub-option-item">{eachSubOption.displayText}</li>
                // </Link>
              );
            })}
        </ul>
      </Link>
    </>
  );
};

export default SidebarItem;
