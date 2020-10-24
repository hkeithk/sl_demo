import React from 'react';
import Tag from 'components/Tag';
import './Sidebar.css';

export const Sidebar = (props) => {
  const { data } = props;

  const allTags =
    Object.keys(data).length > 0 &&
    data.tags.map((tag, index) => <Tag tagName={tag} key={index} />);

  return (
    <>
      <div className='outer-container'>
        <div className='inner-container'>
          <img src={data.image} alt='blender' className='image' />
          <h3>{data.title}</h3>
          <p className='subtitle'>{data.subtitle}</p>
        </div>
        <div className='tag--container'>
          <div className='tag--container-row'>{allTags}</div>
        </div>
        <div className='control--container'>
          <button className='button'>
            <p>OVERVIEW</p>
          </button>
          <button className='button'>
            <p>SALES</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
