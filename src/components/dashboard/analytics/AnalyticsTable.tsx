import React from 'react'
import { Table, Badge, Button } from 'antd';
import Link from 'next/link';
import type { ColumnsType, TableProps } from 'antd/es/table';

const { Column } = Table;

interface TableRow {
    key: string;
    storyGroup: React.ReactNode;
    status: React.ReactNode;
    labels: React.ReactNode;
    reach: number;
    impression: number;
}


const columns: ColumnsType<TableRow> = [
    {
      title: 'Story Group',
      dataIndex: 'storyGroup',
      key: 'storyGroup',
      render: (text, { storyGroup }) => (
        <Link href="#" className="flex items-center space-x-3 w-fit cursor-pointer">
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
      dataIndex: 'status',
      key: 'status',
      render: (text, { status }) => {
        return <Badge status={status === "Active" ? "success" : "error"} text={status} />
      }
    },
    {
      title: 'Labels',
      dataIndex: 'labels',
      key: 'labels',
      render:(text, { labels }) => {
          return <Button type="default">See Labels</Button>
      }
    },
    {
      title: 'Reach',
      dataIndex: 'reach',
      key: 'reach',
      sorter: (a: TableRow, b: TableRow) => a.reach - b.reach,
    },
    {
      title: 'Impression',
      dataIndex: 'impression',
      key: 'impression',
      sorter: (a: TableRow, b: TableRow) => a.impression - b.impression,
    },
  ];


const data: TableRow[] = [
    {
        key: '1',
        storyGroup:"",
        status:"Active",
        labels:"hi",
        reach:100,
        impression:100
    },
    // Add more data rows as needed
];


const AnalyticsTable = () => {
    return (
        <div className='mt-20 px-6 max-w-full overflow-x-auto'>
            <Table scroll={{x:true}} columns={columns} dataSource={data}>
                
            </Table>
        </div>
    )
}

export default AnalyticsTable