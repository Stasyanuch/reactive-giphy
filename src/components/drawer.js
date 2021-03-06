import React, { useState } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import '../scss/components/drawer.scss'

const Drawer = props => {
  const [isOpen, setIsOpen] = useState(false)
  const { children } = props
  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    >
      <div className="drawer-content">{children}</div>
    </SwipeableDrawer>
  )
}

export default Drawer
