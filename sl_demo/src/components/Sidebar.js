import React from 'react';
import Tag from 'components/Tag';
import './Sidebar.css';

export const Sidebar = (props) => {
  const { data } = props;
  console.log(data);

  const allTags =
    data.length > 0 &&
    data.tags.map((tag, index) => <Tag tagName={tag} key={index} />);

  return (
    <>
      <div className='outer-container'>
        <div>
          <img src={data.image} alt='blender' />
          <h3>{data.title}</h3>
          <h4>{data.subtitle}</h4>
        </div>
        <div>
          <div className='tag--container-row'>{allTags}</div>
        </div>
        <div>
          <h4>OVERVIEW</h4>
          <h4>SALES</h4>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
