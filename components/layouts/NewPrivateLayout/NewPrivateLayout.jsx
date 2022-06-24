import { useState } from 'react';
import { DashboardLayoutRoot } from './NewPrivateLayout.css';
import { Box } from '@mui/material';



import React from 'react'
import { DashboardNavbar } from '../../NewStyles/dashboard-navbar';
import { DashboardSidebar } from '../../NewStyles/dashboard-sidebar';

const NewPrivateLayout = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
      <>
        <DashboardLayoutRoot>
            <Box
            sx={{
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                width: '100%'
            }}
            >
            {children}
            </Box>
        </DashboardLayoutRoot>
        <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        <DashboardSidebar
            onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
      </>
   
  )
}

export default NewPrivateLayout