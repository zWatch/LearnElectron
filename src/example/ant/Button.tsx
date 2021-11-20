
import { Button as ANTButton } from 'antd'

export function AntButtonDemo() {
  return (
      <div>
      <ANTButton>Default</ANTButton>
      <ANTButton type="primary">Primary</ANTButton>
      <ANTButton type="dashed">Dashed</ANTButton>
      {/* <ANTButton type="danger">Danger</ANTButton> 版本问题没有danger */}
      <ANTButton type="link">Link</ANTButton>        
      {/* “"default" | "link" | "text" | "ghost" | "primary" | "dashed" | undefined” */}
    </div>
  )
}
