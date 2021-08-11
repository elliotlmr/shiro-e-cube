import styled, { keyframes } from "styled-components";
import CV from '../../images/CV_Elliot_Lemaire.pdf';

const animatedTitle = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
    }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subcontainer = styled.div`
  height: 40%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(15, 15, 15, 0.9);
  border: 5px ridge var(--color-light);
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h3`
  animation: ${animatedTitle} 2s infinite ease-in-out;
  font-size: 4rem;
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  background: linear-gradient(
    0deg,
    rgba(255, 103, 2, 1) 0%,
    rgba(232, 23, 154, 1) 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(1px 0 5px var(--color-dark));
  text-align: center;
  margin-bottom: 80px;
`;

const ContactLink = styled.a`
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  background: linear-gradient(
    0deg,
    rgba(255, 103, 2, 1) 0%,
    rgba(232, 23, 154, 1) 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 2px var(--color-dark));
  margin: 25px;
  & i {
    font-size: 3rem;
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  color: var(--color-light);
  filter: drop-shadow(0 0 2px var(--color-dark));
`;

export default function Contact() {
  function handleCopy() {
    let text = document.getElementById("mymail").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Mail copied to clipboard !");
    });
  }

  return (
    <Container>
      <Title>Contact me !</Title>
      <Subcontainer>
        <Section>
          <ContactLink href="mailto:lemaireelliot@gmail.com" id="mymail">
            lemaireelliot@gmail.com
          </ContactLink>
          <ContactLink onClick={handleCopy}>
            <i className="bi bi-clipboard"></i>
          </ContactLink>
        </Section>
        <Section>
          <Text>Download my C.V.</Text>
          <ContactLink href={CV} download>here</ContactLink>
          <Text>or visit :</Text>
        </Section>
        <Section>
          <ContactLink target='_blank' rel='noreferrer' href="https://github.com/elliotlmr">
            <i className="bi bi-github"></i>
          </ContactLink>
          <ContactLink target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/elliot-lemaire/">
            <i className="bi bi-linkedin"></i>
          </ContactLink>
        </Section>
      </Subcontainer>
    </Container>
  );
}
