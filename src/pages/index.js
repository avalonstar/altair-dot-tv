/** @jsx jsx */
import { jsx, Box, Flex, Grid, Link, Text } from 'theme-ui'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100%`,
      }}
    >
      <Grid columns={['auto 1fr']} gap={4} sx={{ width: [420, 640], px: 6 }}>
        <Box>
          <a href="https://twitter.com/altairdottv">
            <Image />
          </a>
        </Box>
        <Box>
          <h2 sx={{ mb: 2, mt: 0 }}>Project Altair</h2>
          <Text>
            <p>
              We&apos;re working on an alternative content creation platform.
              Built from the ground up with a focus on <em>transparency</em>,{' '}
              <em>accountability</em>, and <em>community support</em>.
            </p>
            <p>
              It&apos;s a huge risk to jump into this industry, but we firmly
              believe there needs to be an alternative out there. One that
              doesn't take money from venture capitalists. One that isn&apos;t
              ad-supported. One that makes clear how you can support the
              platform, and doesn&apos;t take anything away when you choose to
              support a creator.
            </p>
            <p>
              If you believe in us, come support and follow our development.
              We&apos;ll give you a look behind the curtain as we progress.
            </p>
          </Text>
          <Box>
            🌟&nbsp;
            <Link href="https://twitter.com/altairdottv">
              Follow <strong>@altairdottv</strong> on Twitter
            </Link>
          </Box>
          <Box>
            🌟&nbsp;
            <Link href="https://givebutter.com/ibelieveinaltair">
              Support &ldquo;<em>I believe in Altair</em>&rdquo; on Givebutter
            </Link>
          </Box>
        </Box>
      </Grid>
    </Flex>
  </Layout>
)

export default IndexPage
