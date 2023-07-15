import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

export default function WelcomeEmail({from, message, name}: {from: string, message: string, name: string}) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>You recive mail from your portfolio</Text>
        </Container>
        <Text style={paragraph}>From: {name}</Text>
        <Text style={paragraph}>Email: {from}</Text>
        <Text style={paragraph}>{message}</Text>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};