import GlassCard from "@/components/ui/GlassCard";

export default function WhoWeWorkWith() {
  return (
    <section className="who-we-work-with">
      <div className="section-inner">
        <h2 className="section-title">Who We Work With</h2>

        <p className="section-intro">
          We work with teams at different stages of growth, adapting our approach
          to match their scale, technical needs, and long-term goals.
        </p>

        <div className="who-cards">
          <div>
            <h3>Startups & Founders</h3>
            <p>
              Early-stage founders and startups building MVPs or validating
              product ideas who need reliable, scalable technology from day one.
            </p>
          </div>

          <div>
            <h3>Growing Businesses</h3>
            <p>
              Businesses expanding their digital systems, improving performance,
              or scaling existing platforms to support more users and operations.
            </p>
          </div>

          <div>
            <h3>Product & Internal Teams</h3>
            <p>
              Product teams and internal engineering groups seeking additional
              technical capacity, architectural guidance, or execution support.
            </p>
          </div>

          <div>
            <h3>Global & Remote Clients</h3>
            <p>
              International clients working remotely who value clear
              communication, structured processes, and dependable delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
