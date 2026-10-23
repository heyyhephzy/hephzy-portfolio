import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Intro, Section, Sub, Points, Figure, Screens, type Shot } from "@/components/case-study/CaseStudy";

export const metadata: Metadata = {
  title: "Osita Farm — UI/UX Case Study | Hephzy",
  description:
    "A farm-to-table grocery app that puts the produce first, and shows you how fresh it really is. UI/UX design and all illustrations by Hephzy.",
};

const IMG = "/case-studies2/osita-farm";

// Figma exports, 1608×3496 each
const screen = (n: number, alt: string): Shot => ({
  src: `${IMG}/screen-0${n}.webp`,
  width: 1608,
  height: 3496,
  alt,
});

const S = {
  splash: screen(1, "Splash screen: the Osita Farm logo above an illustrated basket of produce"),
  home: screen(2, "Home: greeting, search, a small promo banner, category chips and large Fresh today photos"),
  categories: screen(3, "Categories: Veggies selected, a Harvested today filter beside Price and Weight, and a two-column photo grid"),
  product: screen(4, "Product page: tomatoes with a Harvested today badge, 250g, 500g, 1kg and Custom options, and a same-day delivery note"),
  cart: screen(5, "Cart: three items above a dark panel with the address, time slot, totals and the Place order button"),
  order: screen(6, "Order status: a green check, confetti and a four-step timeline from Order confirmed to Delivered"),
};

const palette = [
  { role: "Action", name: "Red", hex: "#D93A2B", light: false },
  { role: "Freshness", name: "Green", hex: "#2F6B33", light: false },
  { role: "Commitment", name: "Brown", hex: "#3B2E20", light: false },
  { role: "Photo space", name: "Off-white", hex: "#F5F5F5", light: true },
];

export default function OsitaFarmCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-[#1D1B19] selection:bg-[#D93A2B] selection:text-white">
      <Intro
        title="Osita Farm: a grocery app that lets the produce sell itself"
        tags={["concept", "e-commerce", "illustration"]}
        cover={{
          src: `${IMG}/Hero.webp`,
          width: 5760,
          height: 5314,
          alt: "Osita Farm cover: the red logo, the tagline and three app screens (Home, a tomato product page and the cart) on white",
        }}
        note="A self-initiated concept project. Research was desk research only, with no user interviews, so there are no launch figures here."
      >
        <p>
          Osita Farm is a concept app for buying fresh produce straight from the farm: tomatoes, onions, peppers,
          bananas, palm kernel and more, delivered the same day.
        </p>
        <p>
          I designed the whole path in six screens, from opening the app to knowing your order is on its way, and
          drew every illustration in it. One idea steered every decision: freshness should be visible, not just
          promised.
        </p>
      </Intro>

      <main className="pb-24">
        <Section eyebrow="The backstory" title="Why fresh produce is hard to sell on a phone">
          <p>
            Fresh food is bought with your eyes. At the market you pick up a tomato, look at it, press it. A phone
            takes all of that away, so an app selling produce has to earn the trust the market gets for free.
          </p>
          <Sub>The problem</Sub>
          <Points
            items={[
              {
                lead: "Produce is bought on trust.",
                text: "You can’t squeeze a tomato through a screen. If an app can’t show freshness, shoppers go back to the market.",
              },
              {
                lead: "Grocery apps look alike.",
                text: "Big delivery apps treat produce as one category in a long list, so the food shrinks into small thumbnails and filters.",
              },
              {
                lead: "Doubt peaks at checkout.",
                text: "Totals, fees and delivery time need to be clear before someone commits, not after.",
              },
            ]}
          />
          <Sub>The goals</Sub>
          <Points
            items={[
              { lead: "Make freshness visible at every step." },
              { lead: "Let the produce photos do the talking." },
              { lead: "Keep browse-to-order short." },
              { lead: "Show cost and delivery before the tap." },
            ]}
          />
        </Section>

        <Figure caption="The core path: browse, choose, check out, and see the order on its way">
          <Screens shots={[S.home, S.product, S.cart, S.order]} />
        </Figure>

        <Section eyebrow="My role" title="What I owned">
          <p>
            This was a solo project. I did the research, the UX and UI, and all of the illustration, in Figma. The
            scope was six screens: splash, home, categories, product, cart and order status.
          </p>
        </Section>

        <Section eyebrow="Research" title="Where online fresh produce stands in Nigeria">
          <p>Before designing, I did desk research on the market, the main players and the gaps between them.</p>
          <p>
            The market is growing. Nigeria’s online food delivery market was valued at about{" "}
            <strong>$1.04B in 2024</strong> and is projected to reach <strong>$2.49B by 2033</strong> (IMARC Group).
            But the habit is still the market: open-air markets accounted for <strong>roughly 65%</strong> of retail
            food sales in an older TechCabal report.
          </p>
          <Sub>Competitor snapshot</Sub>
          <Points
            items={[
              {
                lead: "Chowdeck.",
                text: "Food, grocery and medicine delivery across several Nigerian cities. Groceries are one category inside a food-first app.",
              },
              {
                lead: "9jaFarm.",
                text: "A farm-to-consumer marketplace that leads with lower prices, speed and monthly subscription packages.",
              },
              {
                lead: "Oveem.",
                text: "An online fruit and vegetable store that aims to feel like a farmers’ market, with healthy recipes alongside.",
              },
              { lead: "Farmz2U.", text: "Works on the farmer side, with a USSD service to list produce and match buyers." },
            ]}
          />
          <p>
            Big delivery apps treat produce as one category among many, and farm-direct players lead on price and
            logistics. Few put the look and freshness of the produce at the centre of the experience. That set up
            the question:
          </p>
          <p>
            <strong>
              How might we make buying produce on a phone feel as trustworthy as picking it yourself?
            </strong>
          </p>
          <p>
            My answer was a farm-to-table app where the product comes first: clean and minimal, with trust built into
            the details and a short path from browsing to checkout. That became the brief.
          </p>
          <p className="text-lg text-[#77716B]">
            Sources: CB Insights / IMARC Group, TechCabal (Oveem), Chowdeck, BusinessDay (9jaFarm), TechBuild Africa
            (Farmz2U).
          </p>
        </Section>

        <Section eyebrow="Decision 1" title="Product first, interface second">
          <p>
            Real photography is the strongest freshness signal a produce app has. So Home stays quiet: one search
            bar, one small promo, then <strong>large full-width photos under “Fresh today.”</strong> Controls stay
            light so nothing competes with the food.
          </p>
          <Points
            items={[
              { lead: "Search speaks the local language.", text: "The hint uses real staples like palm kernel and ugu." },
              { lead: "Icon chips jump between aisles.", text: "Fruits, veggies and grains are one tap apart." },
              { lead: "The top bar is useful, not busy.", text: "Just a greeting and a cart badge." },
            ]}
          />
        </Section>

        <Figure caption="Splash and Home: the illustrated welcome, then the produce takes over">
          <Screens shots={[S.splash, S.home]} />
        </Figure>

        <Section eyebrow="Decision 2" title="Freshness is a filter and a badge, not a slogan">
          <p>
            Freshness is the question this audience actually asks, so it gets the same weight as price. Categories
            pairs a <strong>“Harvested today” filter</strong> with Price, Weight and Freshness, and the product page
            repeats it as a green badge.
          </p>
          <Points
            items={[
              { lead: "Green is reserved for freshness.", text: "It never appears anywhere else, so it always means the same thing." },
              { lead: "Filters scroll sideways.", text: "They stay out of the way of the photos." },
              { lead: "A two-column grid.", text: "Names and prices stay readable at a glance." },
            ]}
          />
        </Section>

        <Figure caption="“Harvested today” as a filter on Categories, and as a badge on the product page">
          <Screens shots={[S.categories, S.product]} />
        </Figure>

        <Section eyebrow="Decision 3" title="Every colour has one job">
          <p>
            Red comes from the tomato: appetite, energy and the brand, used only for actions like add and checkout.
            Green is proof of freshness. Dark brown gives weight to decision moments. Off-white keeps the photos
            bright. <strong>When each colour does one thing, colour itself starts to communicate.</strong>
          </p>
        </Section>

        <Figure caption="Four colours, four jobs">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-[960px] mx-auto">
            {palette.map((c) => (
              <li
                key={c.role}
                className={`aspect-[3/4] rounded-[28px] p-5 sm:p-7 flex flex-col justify-end font-sans sm:text-lg ${
                  c.light ? "text-[#3B2E20] ring-1 ring-black/10" : "text-white"
                }`}
                style={{ backgroundColor: c.hex }}
              >
                <span className="font-semibold leading-tight">{c.role}</span>
                <span className="text-sm opacity-85 mt-0.5">{c.name}</span>
                <span className="font-mono text-xs opacity-70 mt-0.5">{c.hex}</span>
              </li>
            ))}
          </ul>
        </Figure>

        <Section eyebrow="Illustration" title="Every illustration is drawn by me">
          <p>
            I drew the basket, the tomatoes, the bananas, the wheat and the rest of the produce set myself, rather
            than reaching for stock icons. Warm, flat shapes in the same four brand colours give the app a friendly,
            farm-fresh personality, and they tie the splash screen, the Home banner and the cover into one visual
            world.
          </p>
        </Section>

        <Figure caption="Part of the produce set: the basket, tomatoes in the brand colours, and bananas" bare>
          <Image
quality={95}             src={`${IMG}/illustrations.webp`}
            width={2487}
            height={824}
            alt="Hand-drawn illustrations: a basket of produce, four tomatoes in the brand colours, and a bunch of bananas"
            sizes="(min-width: 1240px) 1200px, 100vw"
            className="w-full h-auto block bg-white ring-1 ring-black/[0.06] rounded-[28px]"
          />
        </Figure>

        <Section eyebrow="Decision 4" title="Buy in familiar amounts, see the promise before the tap">
          <p>
            Most people buy produce in familiar amounts, so <strong>250g, 500g and 1kg are one tap</strong> and
            Custom covers everything else. The price updates with the choice, and a same-day delivery note (order
            before 2pm) sits right above the total, where hesitation happens.
          </p>
          <Points
            items={[
              { lead: "The badge sits next to the name.", text: "“Harvested today” is the first thing you read after the photo." },
              { lead: "Actions stay in thumb reach.", text: "The quantity stepper and Add to cart live in a fixed bottom bar." },
              { lead: "A short, appetising description.", text: "It sets expectations without a wall of text." },
            ]}
          />
        </Section>

        <Section eyebrow="Decision 5" title="A dark panel for the moment of commitment">
          <p>
            The cart list stays light and scannable, while a <strong>dark panel docks at the bottom</strong> with the
            delivery address, time slot, subtotal, fee and total above the red Place order button. Everything needed
            to say yes lives in one place, and the contrast pulls the eye to the total and the action. No surprises
            after the tap.
          </p>
          <Points
            items={[
              { lead: "Change things in place.", text: "Address and time slot can be edited right there via “Change.”" },
              { lead: "Extras stay out of the way.", text: "Promo code and “Add more items” sit below the list." },
              { lead: "Cost and delivery together.", text: "Of the cart layouts I explored, this was the one that kept them side by side." },
            ]}
          />
        </Section>

        <Figure caption="From choosing an amount to placing the order, with cost and delivery always in view">
          <Screens shots={[S.product, S.cart]} />
        </Figure>

        <Section eyebrow="Decision 6" title="Close the loop after the tap">
          <p>
            The order status screen answers the next question before anyone asks it. A green check and a little
            confetti confirm the order, then a four-step timeline shows Order confirmed, Harvested, Out for delivery
            and Delivered.
          </p>
          <p>
            <strong>The Harvested step is what makes farm-to-table real:</strong> the order is confirmed first, then
            picked.
          </p>
          <Points
            items={[
              { lead: "The checkout style carries through.", text: "The same dark summary panel stays to the end." },
              { lead: "One red action.", text: "Track order is the only thing asking for a tap." },
              { lead: "Nothing to look up.", text: "The order number and delivery estimate stay in view." },
            ]}
          />
        </Section>

        <Figure caption="Order status: confirmed first, then harvested, then on its way">
          <Screens shots={[S.order]} />
        </Figure>

        <Section eyebrow="What didn’t work" title="Three Home screens I threw away">
          <p>
            The final Home screen came from rejecting three earlier directions. Each one taught me what the app
            should not be.
          </p>
          <Points
            items={[
              {
                lead: "Red and cream.",
                text: "Safe and tidy, but forgettable. It had no point of view and gave the photos nothing to push against.",
              },
              {
                lead: "Red header, serif headline, 2×2 grid.",
                text: "Familiar to the point of generic. It looked like every other grocery app, which was exactly the problem I was solving.",
              },
              {
                lead: "Bold outlined stickers.",
                text: "Playful, but loud. The heavy outlines competed with the produce, so the food stopped being the hero.",
              },
            ]}
          />
          <p>
            Every rejection pointed to the same answer: <strong>remove, don’t add.</strong> A clean, product-first
            layout let the photos do the work.
          </p>
        </Section>

        <Section eyebrow="Final screens" title="Splash to order status, in six screens">
          <p>The full path, start to finish.</p>
        </Section>

        <Figure caption="Splash, Home, Categories, Product, Cart and Order status">
          <div className="space-y-6 sm:space-y-10">
            <Screens shots={[S.splash, S.home, S.categories]} />
            <Screens shots={[S.product, S.cart, S.order]} />
          </div>
        </Figure>

        <Section eyebrow="Reflection" title="What Osita Farm taught me">
          <Points
            items={[
              {
                lead: "Let the product lead.",
                text: "In a food app, photography beats decoration. Every layout choice was about getting out of the way of the produce.",
              },
              {
                lead: "Give each colour one job.",
                text: "Red for action, green for freshness, brown for commitment. Restraint made the palette communicate on its own.",
              },
              {
                lead: "Say the cost before the tap.",
                text: "Totals, fees and delivery time sit in one panel before the order is placed, so nobody is surprised afterwards.",
              },
            ]}
          />
          <Sub>If this were a real product</Sub>
          <p>
            Next I would test with real shoppers, especially around whether “Harvested today” changes what people
            buy. Then I would design payment, address management and substitutions for out-of-stock items.
          </p>
        </Section>

        <Section eyebrow="Credits">
          <p>UI/UX design, research and all illustrations by Hephzy. Made in Figma.</p>
        </Section>

        <div className="max-w-[680px] mx-auto px-6 mt-20 pt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 font-[family-name:var(--font-garamond)] text-xl">
          
          <a
            href="mailto:heyyhephzy@gmail.com"
            className="inline-flex items-center gap-1.5 text-[#1D1B19] hover:text-[#D93A2B] transition-colors"
          >
            <span>heyyhephzy@gmail.com</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </main>
    </div>
  );
}
