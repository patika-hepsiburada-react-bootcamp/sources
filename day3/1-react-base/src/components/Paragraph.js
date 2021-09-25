import PropTypes from 'prop-types';

function Paragraph(props) {
  console.log(props);

  const { text } = props;
  return <div>{text}</div>;
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  numberOfLines: PropTypes.number.isRequired,
};

export default Paragraph;
