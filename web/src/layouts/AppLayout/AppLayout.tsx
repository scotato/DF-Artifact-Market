import { Container, Grid, GridItem } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Container maxW="container.xl">
      <Grid p={16} gap={8}>
        <GridItem>
          <Link to={routes.market()}>Artifact Market</Link>
        </GridItem>
        <GridItem>{children}</GridItem>
      </Grid>
    </Container>
  )
}

export default AppLayout
