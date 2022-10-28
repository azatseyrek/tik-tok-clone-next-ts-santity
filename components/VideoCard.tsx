import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { IVideo } from '../types';
import { useEffect, useRef, useState } from 'react';
// icons
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

interface IProps {
  post: IVideo;
}

const VideoCard: NextPage<IProps> = (props) => {
  const { post } = props;

  const [isHover, setIsHover] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (isPlaying) {
      videoRef?.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef?.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href="">
              <>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={post.postedBy.image}
                  alt="profile photo"
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div className="flex items-center gap-2">
                <p className="flex gap-2 items-center md:text-md font-bold text-primary">
                  {post.postedBy.userName}
                  <GoVerified className="text-blue-400 text-md" />
                </p>
                <p className="capitalize font-medium text-xs text-gray-500 hidden xl:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:ml-20 flex gap-4 relative">
        <div
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          className="rounded-3xl "
        >
          <Link href="/">
            <video
              ref={videoRef}
              className="h-[300px] lg:w-[600px] md:h-[400px] lg:h-[503px] w-[200px] bg-gray-100 rounded-2xl cursor-pointer"
              loop
              src={post.video.asset.url}
              onClick={onVideoPress}
            />
          </Link>
          {isHover && (
            <div className="flex justify-between">
              {isPlaying ? (
                <button onClick={onVideoPress}>
                  <BsFillPauseFill className="text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={onVideoPress}>
                  <BsFillPlayFill className="text-black text-2xl lg:text-4xl" />
                </button>
              )}
              {!isVideoMuted ? (
                <button onClick={() => setIsVideoMuted(true)}>
                  {' '}
                  <HiVolumeUp className="text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={() => setIsVideoMuted(false)}>
                  <HiVolumeOff className="text-black text-2xl lg:text-4xl" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
