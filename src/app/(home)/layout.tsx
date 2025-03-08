import { Layout } from '../components'

export default ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <Layout>{children}</Layout>
}
