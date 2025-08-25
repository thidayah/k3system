import { Button, Flex, Progress, Table, Typography } from "antd"
import { CalendarOutlined, AlignRightOutlined, CheckCircleFilled, EllipsisOutlined, ExclamationCircleFilled, CloseCircleFilled } from "@ant-design/icons"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { Template } from "../components"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend, Filler);

const Dashboard = () => {
  const labelsLine = ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'];
  const dataLine = {
    labels: labelsLine,
    datasets: [
      {
        label: 'Red Line',
        data: [70, 75, 108, 72, 95, 105],
        borderColor: '#FF5722',
        // backgroundColor: 'rgba(255, 87, 34, 0.08)', // glow effect
        backgroundColor: 'transparent', // glow effect
        pointBackgroundColor: '#FF5722',
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Blue Line',
        data: [50, 60, 55, 65, 60, 70],
        borderColor: '#3AC8FF',
        // backgroundColor: 'rgba(58, 200, 255, 0.08)',
        backgroundColor: 'transparent', // glow effect
        pointBackgroundColor: '#3AC8FF',
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
      },
    ],
  };
  const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: any) => `$${context.parsed.y.toFixed(2)}`,
        },
        backgroundColor: '#FF5722',
        titleColor: '#fff',
        bodyColor: '#fff',
        displayColors: false,
        padding: 10,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#B0B8D9',
          font: { size: 14 },
        },
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 6,
        hoverBorderWidth: 2,
        hoverBorderColor: '#fff',
      },
    },
  };

  const labelsBar = ['17', '18', '19', '20', '21', '22', '23'];
  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        label: 'Base',
        data: [10, 10, 10, 10, 10, 10, 10],
        backgroundColor: '#7B61FF', // Purple
        stack: 'stack1',
        barThickness: 20

      },
      {
        label: 'Middle',
        data: [15, 15, 15, 15, 15, 15, 15],
        backgroundColor: '#5BD3FF', // Cyan
        stack: 'stack1',
        barThickness: 20,
      },
      {
        label: 'Top',
        data: [10, 10, 10, 10, 10, 10, 10],
        backgroundColor: '#E6F0FF', // Lightest
        stack: 'stack1',
        barThickness: 20,
        borderRadius: 99
      }
    ],
  };
  const optionsBar = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        // callbacks: {
        //   label: function(context) {
        //     const label = context.dataset.label || '';
        //     const value = context.parsed.y;
        //     return `${label}: ${value}`;
        //   }
        // }
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          color: '#B0B8D9',
          font: { size: 14 },
        }
      },
      y: {
        stacked: true,
        display: false,
      }
    }
  };

  const statusComponent = (status: string) => (
    <Typography.Text strong>
      {status === 'Approved' ?
        <CheckCircleFilled style={{ marginRight: '6px', color: '#04cd99', fontSize: '16px' }} />
        : status === 'Error' ?
          <ExclamationCircleFilled style={{ marginRight: '6px', color: '#ffcd20', fontSize: '16px' }} />
          : <CloseCircleFilled style={{ marginRight: '6px', color: '#ee5e50', fontSize: '16px' }} />
      }
      {status}
    </Typography.Text>
  )

  const columnsTable = [
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      render: (status: any) => statusComponent(status),
    },
    {
      title: 'DATE',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'PROGRESS',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress: number) => <Progress percent={progress} showInfo={false} strokeColor="#f05a2f" />
    },
  ];

  const dataTable = [
    {
      key: '1',
      name: 'John Brown',
      date: '18 Apr 2021',
      status: 'Approved',
      progress: 20,
    },
    {
      key: '2',
      name: 'Jim Green',
      date: '20 Apr 2021',
      status: 'Error',
      progress: 75,
    },
    {
      key: '3',
      name: 'Joe Black',
      date: '12 Jun 2021',
      status: 'Disable',
      progress: 50,
    }, {
      key: '4',
      name: 'Brown Jazz',
      date: '11 Apr 2021',
      status: 'Approved',
      progress: 30,
    },
  ];

  return (
    <Template isLayout={false}>
      <Flex
        gap={20}
        style={{
          padding: '8px 24px'
        }}
      >
        <div style={{
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '4px',
          padding: '24px',
          // maxHeight: '450px'
        }}>
          <Flex justify={'space-between'} align={'center'}>
            <Button color={'default'} variant={'filled'} style={{ color: '#a3add0' }}>
              <CalendarOutlined />
              This Month
            </Button>
            <Button color="default" variant="filled" shape="circle">
              <AlignRightOutlined style={{ color: '#f05a2f', rotate: '90deg' }} />
            </Button>
          </Flex>
          <br />
          <Typography.Title level={3} style={{ margin: 0 }}>$37.5K</Typography.Title>
          <Typography.Text style={{ color: '#7B8DB0' }}>Total Spent <span style={{ color: '#34C759' }}>+2.45%</span></Typography.Text>
          <Flex>
            <Typography.Text strong style={{ color: '#34C759', marginTop: '12px' }}><CheckCircleFilled style={{ marginRight: '4px' }} />On Track</Typography.Text>
          </Flex>
          <div
            style={{
              marginTop: '75px',
              minHeight: '200px',
              maxHeight: '300px',
            }}
          >
            <Line data={dataLine} options={optionsLine} />
          </div>
        </div>
        <div style={{
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '4px',
          padding: '24px',
          // maxHeight: '450px'
        }}>
          <Flex justify={'space-between'} align={'center'}>
            <Typography.Title level={3}>Weekly Revenue</Typography.Title>
            <Button color="default" variant="filled" shape="circle">
              <AlignRightOutlined style={{ color: '#f05a2f', rotate: '90deg' }} />
            </Button>
          </Flex>
          <div
            style={{
              marginTop: '32px',
              // minHeight: '200px',
              maxHeight: '300px',
            }}
          >
            <Bar data={dataBar} options={optionsBar} />
          </div>
        </div>
      </Flex>
      <Flex
        gap={20}
        style={{
          padding: '8px 24px'
        }}
      >
        <div style={{
          width: '60%',
          backgroundColor: 'white',
          borderRadius: '4px',
          // padding: '24px',
          // height: '500px',
        }}>
          <Flex justify={'space-between'} align={'center'} style={{ padding: '24px', paddingBottom: '0px' }}>
            <Typography.Title level={3}>Complex Table</Typography.Title>
            <Button color="default" variant="filled" shape="circle">
              <EllipsisOutlined style={{ color: '#f05a2f' }} />
            </Button>
          </Flex>
          <Table
            columns={columnsTable}
            dataSource={dataTable}
            pagination={{ position: ['none', 'none'] }}
            style={{
              marginTop: '12px'
            }}
          />
        </div>
      </Flex>

    </Template>
  )
}

export default Dashboard