import Link from 'next/link';
import React from 'react';
import {
  IoNewspaperOutline,
  IoUnlinkOutline,
} from 'react-icons/io5';

export default function InternshipCard(props) {
  const isDemoLink = props.link;
  let demoLink;
  if (isDemoLink) {
    demoLink = (
      <Link href={isDemoLink}>
        <div className="flex pt-3 gap-1 items-center ">
          <IoUnlinkOutline className="flex-none" />
          <p className="text-sm text-blue-800 hover:text-blue-600 hover:underline">
            {props.linkText}
          </p>
        </div>
      </Link>
    );
  } else {
    demoLink = <></>;
  }
  return (
    <>
      <div className="p-4">
        <div className="flex gap-2 items-center">
          <IoNewspaperOutline className="flex-none text-2xl" />
          <h1 className="lg:text-xl font-semibold">{props.title}</h1>
        </div>
        <div className="lg:ml-8">
          <h3 className="pt-2 lg:text-lg">{props.place}</h3>
          <h5 className="pb-2 text-sm lg:text-md">{props.date}</h5>
          <p>{props.desc}</p>
          {demoLink}
        </div>
      </div>
    </>
  );
}
