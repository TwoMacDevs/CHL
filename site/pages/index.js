import Button from '../components/Button'
import { FeatureGrid } from '../components/FeatureGrid/FeatureGrid'
import { FeaturedItemAsset } from '../components/FeatureGrid/styles'
import Layout from '../components/Layout/'
import { SpannableGrid } from '../components/SpannableGrid/SpannableGrid'
import { SpannableItem } from '../components/SpannableGrid/styles'
import { BodyText, CenteredBodyText } from '../styles'
import  SimpleCenteredFeature from '../components/SimpleCenteredFeature'
import styled from 'styled-components'


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
      <SimpleCenteredFeature>
        <CenteredBodyText>
          <b>Christian Heritage London</b> exists to draw attention to the advances of the gospel in this city’s history in order to bless the present and shape the future.
        </CenteredBodyText>
      </SimpleCenteredFeature>
      <FeatureGrid src={'/buildings.png'} title={'London Walks'} picture>
        <div>
        <BodyText>We take small groups, families, church groups and others on walks and tours through some of the awesome London gospel stories.</BodyText>
        <Button>Book a walk</Button>
        </div>
      </FeatureGrid>
      <FeatureGrid reverse src={'/buildings.png'} title={'An Interview with Andrew Sach'} picture>
        <div>
        <BodyText>PODCAST</BodyText>
        <Button>Subscribe</Button>
        </div>
      </FeatureGrid>
      <FeatureGrid src={'/buildings.png'} title={'Martin Luther: Lecture on Galatians'} picture>
        <div>
        <BodyText>ON THIS DAY</BodyText>
        <BodyText>We take small groups, families, church groups and others on walks and tours through some of the awesome London gospel stories</BodyText>
        <BodyText>Read the article</BodyText>
        </div>
      </FeatureGrid>
      <SpannableGrid items={items} span={4} mobileSpan={3} style={{paddingBottom: '100px'}} >
      </SpannableGrid>
    </Layout>
  )
}

