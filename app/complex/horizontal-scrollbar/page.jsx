"use client";

import HorizontalScrollbar from "@/components/layout/horizontal-scrollbar/HorizontalScrollbar";
import React from "react";

const categories = [
  "Vlogs ",
  "Gaming",
  "Technology",
  "Beauty and Fashion",
  "Education",
  "Music ",
  "Comedy ",
  "Food and Cooking",
  "Health and Fitness ",
  "DIY and Crafts ",
  "Reviews and Unboxings ",
  "Travel ",
  "ASMR ",
  "Animation",
  "News and Commentary ",
  "Reaction Videos ",
  "Lifestyle ",
  "Podcasts ",
  "Science ",
  "Storytime ",
  "Tutorials",
  "Pranks",
  "Parenting and Family ",
  "Sports",
  "Finance ",
  "Pet and Animal Videos ",
  "Automotive ",
  "Horror ",
  "Motivational ",
  "Movies and TV ",
];

const users = new Array(20).fill(0).map((item, index) => {
  return {
    id: index,
    username: `U#${index}`,
    image: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 50)}`,
  };
});

const HorizontalScrollbarPage = () => {
  console.log(users);
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>HorizontalScrollbarPage</h1>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Youtube categories</h1>
      <HorizontalScrollbar scrollbar={false}>
        {categories.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 p-1 shrink-0 rounded-lg hover:border-gray-400 cursor-pointer"
          >
            <h1>{item}</h1>
          </div>
        ))}
      </HorizontalScrollbar>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Instagram categories</h1>
      <HorizontalScrollbar>
        {users.map((item, index) => (
          <div key={index} className="shrink-0">
            <img
              src={item.image}
              alt={item.username}
              className="w-14 h-14 rounded-full cursor-pointer hover:scale-125 transition-all duration-200"
            />
          </div>
        ))}
      </HorizontalScrollbar>
    </div>
  );
};

export default HorizontalScrollbarPage;
