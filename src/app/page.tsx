import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import MyStack from "@/components/sections/MyStack";
import Container from "@/components/Container";
import Languages from "@/components/sections/Languages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Container>
        <MyStack />
        <Languages />
      </Container>

      {/* Latest Projects */}

      {/* Latest Blogs */}

      <Footer />
    </>
  );
}
