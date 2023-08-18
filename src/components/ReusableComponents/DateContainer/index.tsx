import "./index.css";

type dateContainerProps = {
  icon: string;
  title: string;
  date: any;
};

const DateContainer = (props: dateContainerProps) => {
  return (
    <div className="icon-date-container">
      <img src={props.icon} className="date-icon-size" alt="date icon" />

      <div className="initial-date-list-new">
        <h1 className="date-title new-date-title">{props.title}</h1>
        <h1 className="month-year">{props.date}</h1>
      </div>
    </div>
  );
};

export default DateContainer;
