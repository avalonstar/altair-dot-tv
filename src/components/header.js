/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Box, Heading } from 'theme-ui'

import Image from '../components/image'

const Header = ({ siteTitle }) => (
  <Box>
    <h1
      sx={{
        color: `grey.200`,
        fontSize: [0, 2],
        textTransform: 'uppercase',
        m: 0,
        py: 2,
      }}
    />
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
