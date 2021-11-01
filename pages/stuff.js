


import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import { WorkGridItem } from '@/components/grid-item'

const items = [
{id: 354, thumbnail:"https://picsum.photos/200/300", title: "title1", content: "hi there"},
{id: 454, thumbnail:"https://picsum.photos/200/300", title: "title2", content: "hi there"},
{id: 554, thumbnail:"https://picsum.photos/200/300", title: "title3", content: "hi there"},
{id: 654, thumbnail:"https://picsum.photos/200/300", title: "title4", content: "hi there"}


]
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Title and stuff
      </Heading>


      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Just a heading
        </Heading>
      </Section>


      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Another heading
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {items.map(i => 
            <Section delay={0.5} key={i}>
            <WorkGridItem id={i.id} thumbnail={i.thumbnail} title={i.title}>
              { i.content }
            </WorkGridItem>
            </Section>
        )}

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
