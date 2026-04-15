import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCart = ({ friend }) => {
  const { id, name, status, picture, days_since_contact, tags } = friend;

  const statusBg = {
    'almost due': 'bg-[#EFAD44]',
    'on-track': 'bg-[#244D3F]',
    'overdue': 'bg-[#EF4444]'
  };

  return (
      <Link href={`/friends/${id}`}>
    <div className="border-2 border-zinc-100 rounded-xl p-5 flex flex-col space-y-2 items-center justify-center mx-3 lg:mx-0">
      <Image className="rounded-full hover:border-2 border-green-500 hover:shadow-2xl transition-all duration-500 hover:scale-95" width={100} height={100} src={picture} alt={name} />
      <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
      <p>{days_since_contact}d ago</p>
      <div className="flex gap-2">
        {tags.map((tag, i) => (
          <p key={i} className="bg-[#CBFADB] px-2 py-1 text-[12px] rounded-full font-bold">{tag}</p>
        ))}
      </div>
      <p className={`${statusBg[status]} px-2 py-1 rounded-full text-white text-[12px] font-bold `}>{status}</p>
        
    </div>
      </Link>
  );
};

export default FriendCart;
