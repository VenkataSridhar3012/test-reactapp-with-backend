import "./index.css";

type bookmarkContainerProps = {
  icon: string;
  title: string;
  value: string;
};

const BookmarkContainer = (props: bookmarkContainerProps) => {
  const { icon, title, value } = props;
  return (
    <div className="initial-date-container">
      <img className="icon-size-in-lower" src={icon} alt="start-date-icon" />
      <div className="initial-date-list">
        <span className="date-title">{title}</span>
        <span className="value">{value}</span>
      </div>
    </div>
  );
};

export default BookmarkContainer;
