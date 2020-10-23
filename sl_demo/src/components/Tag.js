import './Tag.css';

export const Tag = (props) => {
  const { tagName } = props;
  return <p className='tagContainer'>{tagName}</p>;
};
export default Tag;
