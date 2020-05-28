import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Photo from '../../photo/photo.component';

const TabHeader = ({ activeTab, toggle, title, number }) => (
  <NavItem>
    <NavLink
      className={classnames({ active: activeTab === number })}
      onClick={() => {
        toggle(number);
      }}
    >
      {title}
    </NavLink>
  </NavItem>
);

function Content({ category = '' }) {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    console.log(tab);

    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Nav tabs className='mb-2'>
        <TabHeader
          activeTab={activeTab}
          toggle={toggle}
          title='Photo'
          number='1'
        />
        <TabHeader
          activeTab={activeTab}
          toggle={toggle}
          title='Collections'
          number='2'
        />
        <TabHeader
          activeTab={activeTab}
          toggle={toggle}
          title='Likes'
          number='3'
        />
        <TabHeader
          activeTab={activeTab}
          toggle={toggle}
          title='Interests'
          number='4'
        />
        <TabHeader
          activeTab={activeTab}
          toggle={toggle}
          title='Following'
          number='5'
        />
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Photo count='10' />
        </TabPane>
      </TabContent>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='3'>
          <Photo count='4' />
        </TabPane>
      </TabContent>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='4'>
          <Photo count='12' />
        </TabPane>
      </TabContent>
    </>
  );
}

export default Content;
