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
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title',
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title'
        },
        {
          image: '/buildings.png',
          title: 'Title, this is the title'
        }
      ];
    return (
        <Layout>
            <FeatureGrid reverse src={'/buildings.png'} title={'London Walks'} picture>
              <div>
              <SmallText>INTERVIEW</SmallText>
              <BodyText>This week, we’re celebrating the great London man John Bunyan’s book The Pilgrim’s Progress. The renowned title...</BodyText>
              </div>
            </FeatureGrid>
            <SpannableGrid titleGrid={' '} items={items} span={4} mobileSpan={3} style={{paddingBottom: '100px'}}>
            </SpannableGrid>
        </Layout>
    )
}
