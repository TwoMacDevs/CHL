import Button from '../components/Button'
import Layout from '../components/Layout/'
import { SimpleCenteredFeature } from '../components/SimpleCenteredFeature/SimpleCenteredFeature'
import { CenteredBodyText } from '../styles'

export default function Contact() {
    return(
        <Layout>
            <SimpleCenteredFeature>
                <CenteredBodyText>
                    We are always available any questions you might have                
                </CenteredBodyText>
                <Button>Book a tour</Button> 
            </SimpleCenteredFeature>
        </Layout>
    )
}