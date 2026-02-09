import GlassCard from "../ui/GlassCard";

export default function HowWeWork() {
    return (
        <section className="how-we-work">
            <div className="how-we-work-inner">
                <div className="how-we-work-grid">

                    {/* LEFT CONTENT */}
                    <div className="how-we-work-content h-full flex flex-col justify-center mt-5">
                        <h2 className="section-title">
                            How We Work
                        </h2>

                        <p className="section-intro">
                            Our software development process is designed to keep projects clear,
                            predictable, and focused on building scalable solutions that solve
                            real business problems — not just ship features.
                        </p>
                    </div>

                    {/* RIGHT BENTO GRID */}
                    <div className="how-we-work-bento">
                        <GlassCard className="card-wide">
                            <span className="step-number">01</span>
                            <h3>Understand the Problem</h3>
                            <p>
                                We deeply understand your business goals, users, and technical
                                constraints before proposing any solution.
                            </p>
                        </GlassCard>

                        <GlassCard>
                            <span className="step-number">02</span>
                            <h3>Architecture</h3>
                            <p>
                                Scalable, secure, and maintainable system design.
                            </p>
                        </GlassCard>

                        <GlassCard>
                            <span className="step-number">03</span>
                            <h3>Build & Iterate</h3>
                            <p>
                                Milestone-driven development with continuous feedback.
                            </p>
                        </GlassCard>

                        <GlassCard className="card-wide">
                            <span className="step-number">04</span>
                            <h3>Launch & Support</h3>
                            <p>
                                Production deployment, monitoring, and long-term support.
                            </p>
                        </GlassCard>
                    </div>

                </div>
            </div>
        </section>
    );
}
