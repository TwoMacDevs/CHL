import { FeatureGrid } from '../components/FeatureGrid/FeatureGrid'
import { FeaturedItemAsset } from '../components/FeatureGrid/styles'
import Layout from '../components/Layout/'
import { SpannableGrid } from '../components/SpannableGrid/SpannableGrid'
import { SpannableItem } from '../components/SpannableGrid/styles'
import { BodyText } from '../styles'

export default function Home() {
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
  ];
  return (
    <Layout>
      <FeatureGrid reverse src={'/buildings.png'} title={'This is the title'} picture>
        <BodyText>This is extra information</BodyText>
      </FeatureGrid>
      <SpannableGrid items={items} span={4}>
      </SpannableGrid>
    </Layout>
  )
}
