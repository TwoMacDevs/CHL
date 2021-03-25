import Layout from '../components/Layout/'
import { SpannableGrid } from '../components/SpannableGrid/SpannableGrid'
import { BodyText, Grid, SmallText } from '../styles';
import { FeatureGrid } from '../components/FeatureGrid/FeatureGrid'
import Button from '../components/Button';
import { SimpleCenteredFeature } from '../components/SimpleCenteredFeature/SimpleCenteredFeature'
import { CenteredBodyText } from '../styles'

export default function About() {
    const items = [
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'NATIONAL TOUR'
          
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'NATIONAL TOUR'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'NATIONAL TOUR'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'NATIONAL TOUR'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'NATIONAL TOUR'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
          subtitle: 'NATIONAL TOUR'
        }
      ];
    return (
        <Layout>
            <SimpleCenteredFeature>
                <CenteredBodyText>
                    <b>Something</b> about how Christian Heritage London offers international tours and how to book one. Something else too maybe?                </CenteredBodyText>
                <Button>Book a tour</Button> 
            </SimpleCenteredFeature>
            <SpannableGrid titleGrid={' '} items={items} span={4} mobileSpan={6} galleryItemsColumns={6} style={{paddingBottom: '100px'}}>
            </SpannableGrid>
        </Layout>
    )
}
