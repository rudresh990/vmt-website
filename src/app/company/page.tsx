import Hero from '@/components/sections/common/Hero';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import ProofStrip from '@/components/layout/proofstrip';
import Position from '@/components/sections/home/Positioning';
export const metadata = {
  title: 'Software & Web Development Company in Mumbai, India',
  description:
    'VoidMatrix Technology is a Mumbai-based software development and digital growth company helping businesses build fast, SEO-friendly websites and software.',
  path: '/company',
};

export default function CompanyPage() {
  const proofContent = [
    'Founded 2026 - Mumbai',
    '5-10 Engineers & Specialists',
    'Clients Across India & Globally',
    'Built on Next.js & Modern Web Standards',
  ];
  return (
    <>
      <Hero
        eyebrow="Mumbai India - EST. 2026"
        title={
          <>
            We Started VMT Because <br />
            <span className="text-(--primary)">India&apos;s Web Deserved Better</span>
          </>
        }
        herosub={
          <>
            <div className="my-2">
              <p>
                <span className="text-white">
                  There are lakhs of websites across India running on platforms that were never
                  built for speed, SEO, or scale.
                </span>
                <span>
                  <span className="font-semibold">VoidMatrix Technology</span> is a software
                  development and digital marketing company in Mumbai building the alternative -
                  fast, modern, globally competitive digital products for Indian businesses.
                </span>
              </p>
            </div>
          </>
        }
      />
      <ProofStrip content={proofContent} />
      <div className="mt-15">
        <Position
          heading="Our Story"
          title="Built From a Frustration With How India Builds for the Web"
          clsName="hero-eyebrow-glowing-b"
        >
          <p className="text-lg text-justify my-5">
            At <span className="font-semibold text-(--primary)">VoidMatrix Technology</span>, our
            mission started with a simple observation: many businesses invest in their digital
            presence, yet few achieve the results they deserve.
          </p>
          <p className="text-lg text-justify my-5">
            As we studied websites across India-from Mumbai and Delhi to Bangalore, Pune, Hyderabad,
            Ahmedabad, and beyond-we observed a recurring issue. While many businesses had websites,
            they often struggled with
            <span className="font-semibold">
              {' '}
              slow loading speeds, poor search visibility, inconsistent user experiences, and
              limited long-term scalability
            </span>
            . In an increasingly competitive digital landscape, these problems directly impact
            growth, customer acquisition, and brand perception.
          </p>
          <p className="text-lg text-justify my-5">
            The challenge was not a lack of ambition; Indian businesses were diligently trying to
            establish themselves online. Instead, the issue was that many had been offered solutions
            focused on launching a website quickly rather than building a
            <span className="font-semibold">
              {' '}
              digital foundation designed for long-term success
            </span>
            .
          </p>
          <p className="text-lg text-justify my-5">We believed there was a better approach.</p>
          <p className="text-lg text-justify my-5">
            In 2026, we founded
            <span className="font-semibold text-(--primary)"> VoidMatrix Technology </span>
            in Mumbai with a clear vision: to assist businesses in creating
            <span className="font-semibold">
              {' '}
              faster, more scalable, and effective digital products
            </span>{' '}
            using modern technologies and industry best practices.
          </p>
          <p className="text-lg text-justify my-5">
            From the beginning, we prioritized the development of websites and software that focus
            on
            <span className="font-semibold">
              {' '}
              performance, search visibility, user experience, maintainability, and business
              outcomes
            </span>
            . We leverage modern technologies such as
            <span className="font-semibold"> Next.js </span>
            and adhere to contemporary web development standards, enabling us to deliver solutions
            that are tailored for today&apos;s internet and prepared for future opportunities.
          </p>
          <p className="text-lg text-justify my-5">
            As we partnered with more businesses, we realized that technology alone is only one
            aspect of sustainable growth. A great website must be supported by
            <span className="font-semibold">
              {' '}
              strong search visibility, meaningful content, effective marketing, thoughtful design,
              and a strategy that aligns digital efforts with business goals
            </span>
            .
          </p>
          <p className="text-lg text-justify my-5">
            This realization prompted us to expand beyond web development into a
            <span className="font-semibold">
              {' '}
              full-service technology and digital growth company
            </span>
            . Today, we offer custom software development, SaaS development, SEO, content marketing,
            digital marketing, UI/UX design, cloud engineering, and business consulting-all under
            one roof. This allows our clients to work with
            <span className="font-semibold"> a single partner for both technology and growth</span>.
          </p>
          <p className="text-lg text-justify my-5">
            India is home to some of the world&apos;s most ambitious entrepreneurs and businesses.
            Our mission is to help them compete more effectively in the digital realm by building
            <span className="font-semibold">
              {' '}
              products, platforms, and strategies that create measurable, long-term value
            </span>
            .
          </p>
          <p className="text-lg text-justify my-5">
            Every project we undertake is guided by the same principle that inspired our founding:
            <span className="italic font-medium">
              {' '}
              technology should not merely exist online; it should help businesses grow.
            </span>
          </p>
        </Position>
      </div>
      <Position
        heading="Mission & Vision"
        title="What We Are Building Towards"
        clsName="hero-eyebrow-glowing-b"
      >
        {/* Mission */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">
            Our <span className="text-(--primary)">Mission</span>
          </h3>

          <p className="text-lg text-justify">
            To help businesses across India build a stronger digital presence through
            <span className="font-semibold">
              {' '}
              high-performance websites, scalable software, effective SEO, and measurable digital
              growth.
            </span>
            We believe every business-whether a startup in Mumbai, an SME in Pune, or an enterprise
            in Bangalore-deserves technology that is fast, search-friendly, reliable, and designed
            to support long-term growth. Our mission is to raise the standard of digital experiences
            in India by combining modern technology with practical business outcomes.
          </p>
        </div>
        {/* Vision */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Our <span className="text-(--primary)">Vision</span>
          </h3>

          <p className="text-lg text-justify">
            To become
            <span className="font-semibold">
              {' '}
              India&apos;s most trusted technology and digital growth partner
            </span>
            , helping businesses build, scale, and compete in an increasingly digital world. We
            envision a future where startups, SMEs, enterprises, and global companies entering the
            Indian market can rely on a single partner for technology, strategy, visibility, and
            growth. Through innovation, transparency, and long-term partnerships, we aim to create
            lasting value for every client we serve.
          </p>
        </div>
      </Position>
      <Position
        heading="Our Values"
        title="How We Work - Six Principles That Drive Everything at VMT"
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Architecture Before <span className="text-(--primary)">Code</span>
            </h3>

            <p className="text-lg text-justify">
              At VMT, we believe successful software begins long before development starts. Every
              project is guided by a
              <span className="font-semibold"> well-defined technical architecture</span>, including
              data modelling, API design, scalability planning, security considerations, and
              infrastructure decisions. By investing time in planning first, we help clients build
              products that are easier to maintain, scale, and evolve as their businesses grow.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Performance is <span className="text-(--primary)">Non-Negotiable</span>
            </h3>

            <p className="text-lg text-justify">
              Performance is not an afterthought-it is a core requirement. We build websites and
              applications with a strong focus on
              <span className="font-semibold">
                {' '}
                speed, user experience, accessibility, and search engine performance
              </span>
              . Our goal is to deliver digital products that load quickly, meet modern web
              standards, and provide users with a seamless experience across devices and networks.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Confidentiality <span className="text-(--primary)">Matters</span>
            </h3>

            <p className="text-lg text-justify">
              Trust is the foundation of every client relationship. We are committed to protecting
              sensitive business information, intellectual property, and strategic plans throughout
              the engagement process. When required, we are happy to work under
              <span className="font-semibold"> Non-Disclosure Agreements (NDAs)</span>, ensuring
              that client confidentiality remains a priority from the very beginning.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Long-Term Relationships Over <span className="text-(--primary)">Transactions</span>
            </h3>

            <p className="text-lg text-justify">
              We are not interested in simply delivering a project and moving on. Our objective is
              to become a
              <span className="font-semibold"> long-term technology and growth partner</span>
              that supports clients through every stage of their journey. Whether it involves
              scaling infrastructure, improving search visibility, launching new products, or
              expanding into new markets, we aim to provide value well beyond the initial
              engagement.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Honesty Over <span className="text-(--primary)">Impressiveness</span>
            </h3>

            <p className="text-lg text-justify">
              We believe transparency builds stronger partnerships than unrealistic promises.
              Clients receive clear guidance regarding project scope, timelines, technical
              trade-offs, and expected outcomes. If a simpler solution is the right solution, we
              will recommend it. Our focus is on helping clients make informed decisions, not on
              selling unnecessary complexity.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Outcomes Over <span className="text-(--primary)">Output</span>
            </h3>

            <p className="text-lg text-justify">
              We measure success by the impact our work creates. While code, content, and campaigns
              are important, the metrics that matter most are
              <span className="font-semibold">
                {' '}
                business growth, improved visibility, qualified leads, customer acquisition,
                operational efficiency, and long-term value
              </span>
              . Every service we provide is designed to contribute to meaningful business outcomes
              rather than simply increasing activity.
            </p>
          </div>
        </div>
      </Position>
      <Position
        heading="Why Mumbai & India"
        title="Built in Mumbai. Serving India and the World."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Why We Are Based in <span className="text-(--primary)">Mumbai</span>
            </h3>

            <p className="text-lg text-justify">
              Mumbai is India&apos;s commercial and financial hub, home to ambitious startups,
              established enterprises, growing SMEs, and a vibrant technology ecosystem. Being
              headquartered here allows VMT to remain closely connected to the businesses,
              industries, and market dynamics that shape India&apos;s digital economy.
            </p>

            <p className="text-lg text-justify mt-4">
              For businesses in Mumbai, working with VMT means partnering with a
              <span className="font-semibold"> local technology and digital growth team</span> that
              understands regional market conditions, operates in the same time zone, and is
              committed to helping businesses compete effectively in an increasingly digital-first
              world.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Clients Across India <span className="text-(--primary)">and Beyond</span>
            </h3>

            <p className="text-lg text-justify">
              While our headquarters are in Mumbai, our reach extends across India. We work with
              businesses in Pune, Delhi NCR, Bangalore, Hyderabad, Chennai, Ahmedabad, Kolkata,
              Surat, and many other cities through a
              <span className="font-semibold">
                {' '}
                remote-first and digitally enabled delivery model
              </span>
              that eliminates geographical barriers.
            </p>

            <p className="text-lg text-justify mt-4">
              We also collaborate with international businesses seeking reliable technology
              expertise and long-term digital growth support. By combining modern development
              practices, transparent communication, and structured project management, we help
              clients worldwide build and scale with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              The Opportunity in India&apos;s{' '}
              <span className="text-(--primary)">Digital Future</span>
            </h3>

            <p className="text-lg text-justify">
              India is one of the world&apos;s fastest-growing digital economies, with hundreds of
              millions of internet users and a rapidly expanding online marketplace. As competition
              increases, businesses are expected to deliver faster websites, stronger user
              experiences, better search visibility, and more effective digital strategies than ever
              before.
            </p>

            <p className="text-lg text-justify mt-4">
              We see this transformation as an opportunity. Businesses that invest in
              <span className="font-semibold">
                {' '}
                modern technology, high-quality digital experiences, and sustainable growth
                strategies
              </span>
              are positioned to build stronger brands and gain a meaningful competitive advantage.
            </p>

            <p className="text-lg text-justify mt-4">
              At VMT, our role is simple:
              <span className="italic font-medium">
                {' '}
                to help businesses turn digital potential into measurable business growth.
              </span>
            </p>
          </div>
        </div>
      </Position>
      <MainServiceCTA
        heading="Ready to Build, Scale & Grow?"
        description="Whether you are a startup in Mumbai looking to launch your first product, an SME across India that wants to finally rank on Google and generate leads online, or a global brand that needs a technology partner with real delivery capability - VMT is ready."
      />
    </>
  );
}
