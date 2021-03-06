import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SignedInMenu = ({signOut, profile}) => {
    return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={profile.photoURL || '/assets/user.png'} />
      <Dropdown pointing="top left" text={profile.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item text="Create Event" icon="plus" />
          <Dropdown.Item text="My Events" icon="calendar" />
          <Dropdown.Item text="My Network" icon="users" />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item as={Link} to="/Settings" text="Settings" icon="settings" />
          <Dropdown.Item text="Sign Out" onClick={signOut} icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    )
}

export default SignedInMenu
