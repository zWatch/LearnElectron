import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'

import { Button as ANTButton } from 'antd'
import { Button2 } from './components/Button2'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Greetings />
      <ANTButton>Hello inahsis</ANTButton>
      <Button2>Hello inahsis</Button2>
      <p>Hello aasnuadduiwdnuwi</p>
    </>
  )
}