import { NextPage } from 'next';
import React from 'react';
import { footerList1, footerList2, footerList3 } from '../utils/constants';

interface listProps {
  items: string[];
  mt: boolean;
}

const Footer = () => {
  const List: NextPage<listProps> = ({ items, mt }) => {
    return (
      <div className={`flex flex-wrap gap-2  ${mt && 'mt-5'}`}>
        {items.map((item) => (
          <p
            key={item}
            className="text-gray-400 text-sm hover:underline cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-6 hidde cl:block">
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt={true} />
      <List items={footerList3} mt={true} />
      <p className="text-gray-200 text-sm mt-5">2022 JSM TikTik</p>
    </div>
  );
};

export default Footer;
