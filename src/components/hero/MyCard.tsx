import Image from "next/image";
import React from "react";

function MyCard() {
  return (
    <div className="md:max-h-[calc(100vh-64px)] md:border-e w-full">
      <div className=" w-full flex flex-col px-2 md:px-8 py-8 items-center justify-center">
        <Image
          src="/profile_picture.png"
          width={360}
          height={720}
          alt="yoel3imari profile picture"
          className="w-full rounded-3xl mb-4 border-4"
        />
        <div className="w-full flex flex-col">
          <p className="text-3xl font-bold text-primary-foreground">
            Youssef El AIMARI
          </p>
          <p className="text-xl">Full-Stack developer</p>
          <p className="text-xl">Data Science Student</p>
        </div>
        <div className="pt-8 flex items-center justify-between gap-4">
          <span>some stats</span>
          <span>some stats</span>
          <span>some stats</span>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
