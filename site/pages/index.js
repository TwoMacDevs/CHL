import { FeatureGrid } from '../components/FeatureGrid/FeatureGrid'
import { FeaturedItemAsset } from '../components/FeatureGrid/styles'
import Layout from '../components/Layout/'
import { SpannableGrid } from '../components/SpannableGrid/SpannableGrid'
import { SpannableItem } from '../components/SpannableGrid/styles'
import { BodyText } from '../styles'

export default function Home() {
  const items = [1,2,3,4,5,6,7,8,9];
  return (
    <Layout>
      <FeatureGrid reverse src={'/buildings.png'} title={'This is the title'} picture>
        <BodyText>This is extra information</BodyText>
      </FeatureGrid>
      <SpannableGrid>
        {items.map((item,key) => 
          <SpannableItem key={key}/>
        )}
      </SpannableGrid>
    </Layout>
  )
}
