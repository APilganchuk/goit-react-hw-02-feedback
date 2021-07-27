import PropTypes from "prop-types";
const Section = ({ children, title }) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
);

Section.defaultProps = {
  children: [],
  title: "",
};
Section.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
};
export default Section;
