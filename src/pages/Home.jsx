// import gambar
import HeroIllustration from "../assets/hero-illustration.png";

// import components
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className="container flex gap-4 my-16">
        {/* bagian kanan */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-6">Landing page for your online service</h1>
          <p className="mb-4">
            Sed ea enim et expedita quo. Sint consequuntur nobis expedita mollitia voluptatem aut
            est a quia.
          </p>
          <Button>Learn More</Button>
        </div>
        {/* bagian kiri */}
        <div className="flex-1">
          <img src={HeroIllustration} alt="hero illustration" />
        </div>
      </section>
    </>
  );
}
