import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'

import { Button as ANTButton } from 'antd'
import { Button2 } from './components/Button2'

// // 由于 antd 组件的默认文案是英文，所以需要修改为中文
//import 'antd/dist/antd.css';
function AntButtonDemo() {
  return (
      <div>
      <ANTButton>Default</ANTButton>
      <ANTButton type="primary">Primary</ANTButton>
      <ANTButton type="dashed">Dashed</ANTButton>
      {/* <ANTButton type="danger">Danger</ANTButton> 版本问题没有danger*/}
      <ANTButton type="link">Link</ANTButton>        
      {/* “"default" | "link" | "text" | "ghost" | "primary" | "dashed" | undefined” */}
    </div>
  )
}

export function App() {
  return (
    <>
      <GlobalStyle />
      <Greetings />
      <AntButtonDemo />
      <Button2>Hello inahsis</Button2>
      <p>Hello aasnuadduiwdnuwi</p>
    </>
  )
}