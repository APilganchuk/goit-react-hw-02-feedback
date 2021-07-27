import PropTypes from "prop-types";

const Notification = ({ message }) => <b>{message}</b>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
