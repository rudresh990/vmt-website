export default function HowWeWork() {
    return (
        <section className="how-we-work">
            <div className="how-we-work-inner">
                <h2 className="hww-title">How We Work</h2>

                <p className="hww-intro">
                    Our software development process is designed to keep projects clear,
                    predictable, and focused on building scalable solutions that meet real
                    business needs.
                </p>

                <div className="process-steps">
                    <div className="process-step">
                        <span className="step-number">01</span>
                        <h3>Understand the Problem</h3>
                        <p>
                            We begin by understanding your business goals, target users, and
                            technical requirements before designing any software solution.
                        </p>
                    </div>

                    <div className="process-step">
                        <span className="step-number">02</span>
                        <h3>Design the Right Architecture</h3>
                        <p>
                            We design scalable system architectures that balance performance,
                            security, and long-term maintainability.
                        </p>
                    </div>

                    <div className="process-step">
                        <span className="step-number">03</span>
                        <h3>Build & Iterate</h3>
                        <p>
                            We develop custom software in structured milestones with regular
                            updates and feedback-driven iteration.
                        </p>
                    </div>

                    <div className="process-step">
                        <span className="step-number">04</span>
                        <h3>Launch & Support</h3>
                        <p>
                            We support deployment and post-launch improvements to ensure
                            reliable performance as systems grow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
