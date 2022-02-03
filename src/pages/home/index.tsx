import React from 'react';
import Header from '../../components/Header';
import { Container, Content, Text, Image } from './style';
import Puppet from '../../assets/puppet.svg'


export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Text>
            <span>TRACTIAN, monitoramento Online.</span>
            <hr />
            <h1>Revolucionando a vida</h1>
            <span>dos profissionais de manuntenção.</span>
          </Text>

          <Image>
            <img src={Puppet} alt='puppet' />
          </Image>
        </Content>
      </Container>
    </>
  )
}
