import { useEffect } from 'react';
import Link from 'next/link';
import Image from'next/image'
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';


const items = [
  {
    href: '/private/admin/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/private/admin/pacientes',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Pacientes'
  },
  {
    href: '/private/admin/servicios',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Servicios'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Login'
  },
  {
    href: '/register',
    icon: (<UserAddIcon fontSize="small" />),
    title: 'Register'
  },
  {
    href: '/404',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 6 }}>
            <Link
              href="/"
              passHref
            >
              <a>
                <Image src={"/logo_dark.png"} alt="soyTuLogo" width={156.25} height={50} />
              </a>
            </Link>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
            <Button
              color="secondary"
              component="a"
              endIcon={(<OpenInNewIcon />)}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Pro Live Preview
            </Button>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};