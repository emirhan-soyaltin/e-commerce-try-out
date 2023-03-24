import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
display:flex ;
`
const Logo = styled.h1``
const Desc = styled.p``
const SocialContainer = styled.div``
const SocialIcon = styled.div``


const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`

const Footer = () => {
  return (
    <Container>
       <Left>
        <Logo>EMIR.</Logo>
        <Desc>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
            <SocialIcon>
                <Facebook />
            </SocialIcon>
            <SocialIcon>
                <Instagram />
            </SocialIcon>
            <SocialIcon>
                <Twitter />
            </SocialIcon>
            <SocialIcon>
                <Pinterest />
            </SocialIcon>
            
        </SocialContainer>
       </Left>
       <Center></Center>
       <Right></Right>
    </Container>
  )
}

export default Footer