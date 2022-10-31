import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/tiktik-logo.png';
import { useState } from 'react';
import { createOrGetUser } from '../utils';
import useAuthstore from '../store/authStore';

const Navbar = () => {
  const { userProfile, addUser, logoutUser } = useAuthstore();

  console.log(userProfile);

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-300 shadow-sm py-2 px-4 ">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="tiktik"
            layout="responsive"
          />
        </div>
      </Link>
      <div>Search</div>
      <div>
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2 rounded-md">
                <IoMdAdd className="text-xl md:text-2xl" />
                <span className="hidden md:block ">Upload</span>
              </button>
            </Link>

            {userProfile.image && (
              <Link href="/profile">
                <>
                  <Image
                    src={userProfile.image}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                  />
                </>
              </Link>
            )}

            <button
              type="button"
              className="px-2 border-2 boreder-gray-400 rounded-full shadow-md active:scale-95"
              onClick={() => {
                googleLogout();
                logoutUser();
              }}
            >
              <AiOutlineLogout color="red" fontSize={24} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('error w google oauth')}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
