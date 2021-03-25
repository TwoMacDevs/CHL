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
            <FeatureGrid reverse src={'/buildings.png'} title={'London Walks'} picture>
              <div>
              <SmallText>INTERVIEW</SmallText>
              </div>
            </FeatureGrid>
            <SimpleCenteredFeature>
            <CenteredBodyText>
              Christian Heritage London exists to draw attention to the advances of the gospel in this city’s history in order to bless the present and shape the future.
            </CenteredBodyText>
            <Button>Subscribe</Button> 
            </SimpleCenteredFeature>
            <SpannableGrid titleGrid={' '} items={items} span={4} mobileSpan={3} style={{paddingBottom: '100px'}}>
            </SpannableGrid>
        </Layout>
    )
}
