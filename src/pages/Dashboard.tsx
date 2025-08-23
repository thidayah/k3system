import { Button, Flex, Typography } from "antd"
import { Template } from "../components"

import { CalendarOutlined, AlignRightOutlined, CheckCircleFilled } from "@ant-design/icons"
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

import { Line } from 'react-chartjs-2';

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
      </Flex>

    </Template>
  )
}

export default Dashboard