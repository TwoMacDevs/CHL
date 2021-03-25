import Layout from '../components/Layout/'
import { SpannableGrid } from '../components/SpannableGrid/SpannableGrid'
import { BodyText, Grid, SmallText } from '../styles';
import { FeatureGrid } from '../components/FeatureGrid/FeatureGrid'
import Button from '../components/Button';
import { SimpleCenteredFeature } from '../components/SimpleCenteredFeature/SimpleCenteredFeature'
import { CenteredBodyText } from '../styles'

export default function About() {
    return (
        <Layout>
            <FeatureGrid src={'/buildings.png'} title={'London Walks'} picture>
              <div>
                <BodyText>We take small groups, families, church groups and others on walks and tours through some of the awesome London gospel stories.</BodyText>
                <Button>Book a London Day</Button>
              </div>
            </FeatureGrid>
            <FeatureGrid reverse src={'/buildings.png'} title={'London Walks'} picture>
              <div>
                <BodyText>Our other tours are the Gospel in Art in London’s major art galleries, and The Influence of Christianity on the West in the V&A.</BodyText>
                <BodyText>If you would like to apply for one of these, or if you would like only a City Walk or a British Museum tour, or if you have any other questions please email</BodyText>
              </div>
            </FeatureGrid>
        </Layout>
    )
}
