import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import './index.css';

type FilterButtonProps = {
  children: string;
  icon: boolean;
};

const FilterButton = (props: FilterButtonProps) => {
  const [drop, setDrop] = useState(false);

  const onClickBtn = () => {
    setDrop(!drop);
  };

  return (
    <p className="filter-btn" onClick={onClickBtn}>
      {props.children}
      <>
        <MdArrowDropDown className="filter-icon" size="35" color="#000000" />
      </>
    </p>
  );
};

export default FilterButton;
