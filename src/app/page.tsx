import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyStack from "@/components/MyStack";
import MyServices from "@/components/MyServices";
import Container from "@/components/Container";
import Languages from "@/components/Languages";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Container>
        <MyServices />
        <MyStack />
        <Languages />
      </Container>

      {/* Latest Projects */}

      {/* Latest Blogs */}
    </>
  );
}
