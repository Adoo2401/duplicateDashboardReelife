import { Card } from "antd";
import Link from "next/link";
import React from "react";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";

const Story = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className="flex flex-col items-center space-y-2 hover:scale-110 cursor-pointer ease-in transition">
      <div className="relative rounded-full overflow-hidden w-16 h-16">
        <div className="absolute inset-0 border-2 border-[#bdbdca] rounded-full"></div>
        <div className="absolute inset-1 rounded-full bg-white">
          <img
            src={img}
            alt={text}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

const Instances = () => {
  return (
    <Card>
      <h1 className="font-bold text-lg lg:text-start text-center">Instances</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <Card
          title={
            <span className="flex space-x-2">
              <CopyOutlined style={{ fontSize: "1rem" }} />
              <h1 className="text-[1rem]">PROD</h1>
            </span>
          }
          extra={
            <Link className="text-primary text-[0.8rem]" href="#">
              Go To Content{" "}
              <ArrowRightOutlined className="ml-2 text-[0.8rem]" />{" "}
            </Link>
          }
        >
          <div className="flex space-x-10 overflow-y-hidden overflow-x-auto py-2 px-2">
            <Story
              text="Testing"
              img="https://nishathotels.com/wp-content/uploads/2022/11/pic1-1024x680.jpg"
            />
            <Story
              text="Testing"
              img="https://img.freepik.com/free-photo/top-view-arrangement-with-food-wooden-background_23-2148308806.jpg?w=2000"
            />
            <Story
              text="Testing"
              img="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
            />
            <Story
              text="Testing"
              img="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
            />
          </div>
        </Card>
        <Card
          title={
            <span className="flex space-x-2">
              <CopyOutlined style={{ fontSize: "1rem" }} />
              <h1 className="text-[1rem]">Test</h1>
            </span>
          }
          extra={
            <Link className="text-primary text-[0.8rem]" href="#">
              Go To Content{" "}
              <ArrowRightOutlined className="ml-2 text-[0.8rem]" />{" "}
            </Link>
          }
        >
          <div className="flex space-x-10 overflow-y-hidden overflow-x-auto py-2 px-2">
            <Story
              text="Testing"
              img="https://nishathotels.com/wp-content/uploads/2022/11/pic1-1024x680.jpg"
            />
            <Story
              text="Testing"
              img="https://img.freepik.com/free-photo/top-view-arrangement-with-food-wooden-background_23-2148308806.jpg?w=2000"
            />
            <Story
              text="Testing"
              img="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
            />
            <Story
              text="Testing"
              img="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
            /> 
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default Instances;
