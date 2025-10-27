// Icons from Lucide React, updated to reflect CIVCON's theme
import { MessageSquare } from "lucide-react"; // For community discussions
import { Users } from "lucide-react"; // For constituency engagement
import { ShieldCheck } from "lucide-react"; // For verified profiles
import { BarChart } from "lucide-react"; // For analytics
import { Smartphone } from "lucide-react"; // For mobile accessibility
import { Globe } from "lucide-react"; // For open dialogue

// Profile images for testimonials (retained, but you can replace with Uganda-specific images)
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

// Navigation items for CIVCON's landing page
export const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "About" },
 
];

// Testimonials from Ugandan users (citizens, leaders, journalists)
export const testimonials = [
  {
    user: "Aisha Nakimuli",
    company: "Kampala Resident",
    image: user1,
    text: "CIVCON helped me raise a concern about our local roads, and my MP responded within days. Now, we’re seeing real progress in our community!",
  },
  {
    user: "Hon. James Okello",
    company: "Member of Parliament, Gulu",
    image: user2,
    text: "The analytics dashboard on CIVCON lets me understand my constituents’ needs better. It’s a game-changer for staying connected.",
  },
  {
    user: "Sarah Ninsiima",
    company: "Freelance Journalist, Mbarara",
    image: user3,
    text: "CIVCON’s verified profiles make it easy to engage with leaders and report on real issues affecting Ugandans. It’s a trusted platform for dialogue.",
  },
  {
    user: "Peter Mugisha",
    company: "Youth Leader, Jinja",
    image: user4,
    text: "I love how CIVCON brings citizens together to discuss solutions. Our community group successfully pushed for better healthcare access!",
  },
  {
    user: "Grace Atim",
    company: "Farmer, Lira",
    image: user5,
    text: "CIVCON is easy to use on my phone, even in rural areas. I can now share my concerns about agricultural policies directly with leaders.",
  },
  {
    user: "David Ssewanyana",
    company: "Civic Activist, Entebbe",
    image: user6,
    text: "This platform empowers us to hold leaders accountable. The issue-tracking feature keeps everyone honest and focused on results.",
  },
];

// Features tailored to CIVCON's functionality
export const features = [
  {
    icon: <MessageSquare />,
    text: "Community Discussions",
    description:
      "Post and discuss local issues like infrastructure or healthcare, tagging MPs for direct responses.",
  },
  {
    icon: <Users />,
    text: "Constituency Engagement",
    description:
      "Join or create community groups based on your district to collaborate on shared goals.",
  },
  {
    icon: <ShieldCheck />,
    text: "Verified Profiles",
    description:
      "Leaders and journalists get verified badges to ensure trusted, authentic communication.",
  },
  {
    icon: <BarChart />,
    text: "Constituency Analytics",
    description:
      "Leaders access data-driven insights on local issues and trends to make informed decisions.",
  },
  {
    icon: <Smartphone />,
    text: "Mobile Accessibility",
    description:
      "Use CIVCON seamlessly on your phone with low-data modes and support for languages like Luganda and Swahili.",
  },
  {
    icon: <Globe />,
    text: "Open Dialogue",
    description:
      "Engage in transparent conversations on political, social, and economic topics to drive Uganda’s development.",
  },
];

// Checklist items for CIVCON's value proposition
export const checklistItems = [
  {
    title: "Raise Issues Easily",
    description:
      "Post concerns about your community and get responses from leaders in real-time.",
  },
  {
    title: "Track Progress",
    description:
      "Monitor the status of your issues, from 'Raised' to 'Resolved,' for transparency.",
  },
  {
    title: "Connect Locally",
    description:
      "Join constituency groups to discuss and solve local challenges together.",
  },
  {
    title: "Stay Informed",
    description:
      "Leaders gain insights from analytics to address community needs effectively.",
  },
];

// Pricing options reflecting CIVCON’s free and premium tiers
export const pricingOptions = [
  {
    title: "Citizen",
    price: "Free",
    features: [
      "Post and discuss issues",
      "Join community groups",
      "Tag leaders for responses",
      "Track issue progress",
    ],
  },
  {
    title: "Leader",
    price: "Contact for Pricing",
    features: [
      "All Citizen features",
      "Constituency analytics dashboard",
      "Verified profile badge",
      "Priority engagement tools",
    ],
  },
  {
    title: "Enterprise",
    price: "Contact for Pricing",
    features: [
      "All Leader features",
      "Custom analytics reports",
      "Dedicated support",
      "Integration with official systems",
    ],
  },
];

// Resource links for CIVCON users
export const resourcesLinks = [
  { href: "#getting-started", text: "Getting Started" },
  { href: "#user-guide", text: "User Guide" },
  { href: "#faqs", text: "FAQs" },
  { href: "#support", text: "Contact Support" },
  { href: "#community", text: "Community Guidelines" },
];

// Platform links for CIVCON’s accessibility and requirements
export const platformLinks = [
  { href: "#features", text: "Features" },
  { href: "#mobile-app", text: "Mobile App" },
  { href: "#system-requirements", text: "System Requirements" },
  { href: "#downloads", text: "Downloads" },
  { href: "#updates", text: "Platform Updates" },
];

// Community links for CIVCON’s engagement opportunities
export const communityLinks = [
  { href: "#events", text: "Community Events" },
  { href: "#town-halls", text: "Virtual Town Halls" },
  { href: "#discussions", text: "Top Discussions" },
  { href: "#ambassadors", text: "CIVCON Ambassadors" },
  { href: "#feedback", text: "Share Feedback" },
];