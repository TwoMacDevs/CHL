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
      title: 'title',
      subtitle: null,
      description: 'description'
    },
    {
      image: '/buildings.png',
      title: 'title',
      subtitle: 'subtitle',
      description: 'description'
    },
    {
      image: '/buildings.png',
      title: 'title',
      subtitle: 'subtitle',
      description: 'description'
    },
    {
      image: '/buildings.png',
      title: 'title',
      subtitle: 'subtitle',
      description: 'description'
    },
    {
      image: '/buildings.png',
      title: 'title',
      subtitle: 'subtitle',
      description: 'description'
    }
  ];
  return (
    <Layout>
      <FeatureGrid reverse src={'/buildings.png'} title={'This is the title'} picture>
        <BodyText>This is extra information</BodyText>
      </FeatureGrid>
      <SpannableGrid items={items} span={4} mobileSpan={6} mobileWrapperGridColumn={'2 / 7'}>
      </SpannableGrid>
    </Layout>
  )
}
