import { Flex } from "antd"
import { Template } from "../components"

const Dashboard = () => {
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

        </div>
      </Flex>

    </Template>
  )
}

export default Dashboard