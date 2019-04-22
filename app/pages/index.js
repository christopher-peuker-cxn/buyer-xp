import Page from '../layouts/page';
import { Link } from '../../server/routes'

const Index = (props) => {
  return (
    <Page title={ props.title }>
      <h1>CXN Fashion Homepage</h1>
      <Link route='collections'><a>Shop Collections</a></Link>
    </Page>
  )
}

export default Index;