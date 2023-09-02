import { ArrowRightOutlined, CaretDownOutlined, CaretUpOutlined, DownloadOutlined } from "@ant-design/icons";
import { Card, Select, Button, Tabs, Badge,Grid } from "antd";
const {useBreakpoint} = Grid 
import React from "react";
import { PERFORMANCE_TABS_ITEMS } from "@/constants";
import Link from "next/link";

const Extra = (
  <div className="flex items-center space-x-3">
    <Select defaultValue={"Apps and Websites"} />
    <Button icon={<DownloadOutlined />}>Export</Button>
  </div>
);

const Performance = () => {

  const screens = useBreakpoint();

  return (
    <Card className="mt-10" extra={Extra} style={{ marginTop: "60px" }} title="Performance">
  <Tabs
    defaultActiveKey="reach"
    tabPosition={screens.xs?"top":"left"}
    
    items={PERFORMANCE_TABS_ITEMS.map((item, i) => {
      return {
        label: (
          <div className="md:grid md:grid-cols-2 md:place-items-start md:space-x-14 tab-label" >
            <h1>{item.text}</h1>
            {
                item.link ? <Link className="text-primary flex items-center" href="#"><p>Get Started </p><ArrowRightOutlined className="ml-3"/></Link> : <div className="md:space-x-3 md:flex w-[100px] badge-content">
                <div><span className="font-bold">{item.number}</span></div>
                <div>
                <Badge
                  className="font-medium"
                  count={
                    item.increase ? (
                      <div>
                        <CaretUpOutlined size={2} style={{ color: "#01EA85" }} /> {item.label}
                      </div>
                    ) : (
                      <div>
                        <CaretDownOutlined style={{ color: "#FF5F4A" }} /> {item.label}
                      </div>
                    )
                  }
                  style={{
                    backgroundColor: item.increase ? "rgba(1, 234, 133, 0.10)" : "rgba(255, 95, 74, 0.10)",
                    padding: "5px 8px 4.5px 8px",
                    borderRadius: "100px",
                  }}
                />
                </div>
              </div>
            }
          </div>
        ),
        key: item.text,
        children: item.children,
      };
    })}
  />
</Card>
  );
};

export default Performance;
