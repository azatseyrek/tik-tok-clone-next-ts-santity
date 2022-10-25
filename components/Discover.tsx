import Link from 'next/link';
import React from 'react';
import { topics } from '../utils/constants';

const Discover = () => {
  const activeTopicStyle = '';

  const topicStyle =
    'xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center justify-center cursor-pointer text-black gap-2';

  return (
    <div className="xl:border-b-2 xl:border-gray-300 pb-6 ">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
        Popular Topics
      </p>
      <div className="flex gap-3 flex-wrap">
        {topics.map((topic) => (
          <Link key={topic.name} href={`/?topics=${topic.name}`}>
            <div className={topicStyle}>
              <span className="text-2xl xl:text-md ">{topic.icon}</span>
              <span className="font-md text-md hidden xl:block capitalize">
                {topic.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
