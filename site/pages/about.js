import Layout from '../components/Layout/'
import { SpannableGrid } from '../components/SpannableGrid/SpannableGrid'
import { Grid } from '../styles';

export default function About() {
    const items = [
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'This subtitle is a bit longer than expected',
          description: 'Description is the longest text to exist in this page'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'This subtitle is a bit longer than expected',
          description: 'Description is the longest text to exist in this page'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'This subtitle is a bit longer than expected',
          description: 'Description is the longest text to exist in this page'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'This subtitle is a bit longer than expected',
          description: 'Description is the longest text to exist in this page'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'This subtitle is a bit longer than expected',
          description: 'Description is the longest text to exist in this page'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'This subtitle is a bit longer than expected',
          description: 'Description is the longest text to exist in this page'
        }
      ];
    return (
        <Layout>
            <SpannableGrid  titleGrid={'Team'} items={items} span={4} mobileSpan={6} imageGridColumn={'1 / 4'} mobileImageGridColumn={'1 / 3'} mobileWrapperGridColumn={'3 / -1'} style={{paddingBottom: '100px'}}>
            </SpannableGrid>  
        </Layout>
    )
}
