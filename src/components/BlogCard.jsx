// Module Imports
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

const BlogCard = ({ title, shortTitle, desc, dateAdded }) => {
  const timestamp = dateAdded;
  const dateObject = new Date(timestamp);

  const formattedDate = `${dateObject.getUTCDate()}-${(
    dateObject.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${dateObject.getUTCFullYear().toString().slice(-2)}`;

  return (
    <div className="blog-card">
      <div className="w-full flex flex-col items-start justify-between gap-1 md:flex-row">
        <h2 className="md:w-5/6 text-xl font-semibold transition ease-in-out ">
          {title}
        </h2>
        <span className="text-gray md:w-1/6 text-right ">{formattedDate}</span>
      </div>
      <div className="h-10 overflow-hidden line-clamp-2 md:h-auto md:overflow-visible md:line-clamp-none">
        <p className="text-sm text-gray">{desc}</p>
      </div>
      <Link
        to={`blogs/${shortTitle}`}
        className="w-40 text-gray flex items-center gap-1 hover:gap-2 hover:text-primary transition-all"
      >
        <p>Read More &nbsp;</p>
        <EastIcon />{" "}
      </Link>
    </div>
  );
};

export default BlogCard;

// Prop Validations
BlogCard.propTypes = {
  shortTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  dateAdded: PropTypes.string.isRequired,
};
