import React from 'react'
import { Table, Badge, Button } from 'antd';
import Link from 'next/link';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { InfoCircleOutlined } from '@ant-design/icons';


interface TableRow {
    key: string;
    storyGroup: React.ReactNode;
    status: React.ReactNode;
    labels: React.ReactNode;
    reach: number;
    impression: number;
    click:number
    skip:number,
    open:number
    share:number,
    complete:number,
    activeUsers:number
}


const columns: ColumnsType<TableRow> = [
    {
      title: 'Story Group',
      className:"text-[12px]",
      dataIndex: 'storyGroup',
      key: 'storyGroup',
      render: (text, { storyGroup }) => (
        <Link href="interaction" className="flex items-center space-x-3 w-fit cursor-pointer">
        <div className='flex items-center'>
            <div className="relative rounded-full overflow-hidden w-16 h-16">
                <div className="absolute inset-0 border-2 border-[#bdbdca] rounded-full"></div>
                <div className="absolute inset-1 rounded-full bg-white">
                    <img
                        style={{ borderRadius: "50%" }}
                        src={"https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"}
                        alt={"https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
        <p className="text-sm text-center max-w-[130px] break-words font-medium text-primary">Variety fruits vegetables</p>
    </Link>
      )
    },
    {
      title: 'Status',
      className:"text-[12px]",
      width:"100px",
      dataIndex: 'status',
      key: 'status',
      render: (text, { status }) => {
        return <Badge status={status === "Active" ? "success" : "error"} text={status} />
      }
    },
    {
      title: 'Labels',
      className:"text-[12px]",
      dataIndex: 'labels',
      key: 'labels',
      render:(text, { labels }) => {
          return <Button type="default">See Labels</Button>
      }
    },
    {
      title:()=>{return <div className="flex space-x-2"><p>Reach</p><InfoCircleOutlined /> </div>},
      className:"text-[12px]",
      dataIndex: 'reach',
      key: 'reach',
      sorter: (a: TableRow, b: TableRow) => a.reach - b.reach,
    },
    {
      title: ()=>{return <div className="flex space-x-2"><p>Impression</p><InfoCircleOutlined /> </div>},
      className:"text-[12px]",
      dataIndex: 'impression',
      key: 'impression',
      sorter: (a: TableRow, b: TableRow) => a.impression - b.impression,
    },
    {
      title: ()=>{return <div className="flex space-x-2"><p>Click</p><InfoCircleOutlined /> </div>},
      className:"text-[12px]",
      dataIndex: 'click',
      key: 'click',
      sorter: (a: TableRow, b: TableRow) => a.impression - b.impression,
    },
    {
      title: ()=>{return <div className="flex space-x-2"><p>Skip</p><InfoCircleOutlined /> </div>},
      className:"text-[12px]",
      dataIndex: 'skip',
      key: 'skip',
      sorter: (a: TableRow, b: TableRow) => a.impression - b.impression,
    },
    {
      title: ()=>{return <div className="flex space-x-2"><p>Open</p><InfoCircleOutlined /> </div>},
      className:"text-[12px]",
      dataIndex: 'open',
      key: 'open',
      sorter: (a: TableRow, b: TableRow) => a.impression - b.impression,
    },
    {
      title: ()=>{return <div className="flex space-x-2"><p>Share</p><InfoCircleOutlined /> </div>},
      className:"text-[12px]",
      dataIndex: 'share',
      key: 'share',
      sorter: (a: TableRow, b: TableRow) => a.impression - b.impression,
    },
    {
      title: ()=>{return <div className="flex space-x-2"><p>Complete</p><InfoCircleOutlined /> </div>},
      className:"text-[12px]",
      dataIndex: 'complete',
      key: 'complete',
      sorter: (a: TableRow, b: TableRow) => a.impression - b.impression,
    },
    {
      title: ()=>{return <div className="flex space-x-2"><p>Active Users</p><InfoCircleOutlined /> </div>},
      className:"text-[12px]",
      dataIndex: 'activeUsers',
      key: 'activeUsers',
    },
  ];


const data: TableRow[] = [
    {
        key: '1',
        storyGroup:"",
        status:"Active",
        labels:"hi",
        reach:100,
        impression:100,
        click:19,
        skip:289,
        open:38,
        share:2,
        complete:3,
        activeUsers:20
    },
    {
        key: '2',
        storyGroup:"",
        status:"Disabled",
        labels:"hi",
        reach:49,
        impression:392,
        click:29,
        skip:202,
        open:219,
        share:2,
        complete:29,
        activeUsers:202
    },
    // Add more data rows as needed
];


const AnalyticsTable = () => {
    return (
        <div className='mt-20 max-w-full overflow-x-auto'>
            <Table scroll={{x:true}} columns={columns} dataSource={data} size='small'/>
        </div>
    )
}

export default AnalyticsTable