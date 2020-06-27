/** @jsx jsx */
import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { jsx, Flex } from 'theme-ui'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={theme => ({ html: { backgroundColor: theme.background } })}
      />
      <Flex sx={{ flexDirection: 'column', height: '100vh', width: '100vw' }}>
        <Header />
        <main sx={{ flex: `1 0` }}>{children}</main>
        <footer
          sx={{
            color: `grey.700`,
            padding: 4,
            textAlign: `center`,
            fontSize: `12px`,
            fontWeight: `bold`,

            'a': { color: 'inherit' }
          }}
        >
          © {new Date().getFullYear()},{' '}
          <a href="https://avalonstar.com">Avalonstar Inc.</a>
        </footer>
      </Flex>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
