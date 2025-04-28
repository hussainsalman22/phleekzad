import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader , CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select , SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleHelp } from "lucide-react";
import { HeroCarousel } from "./carousel";
import { MobileAdsShowcase } from "./mobileadcarousel";
import { ClientNavbar} from "./clientnavbar"

import { Mail, MessageSquare, Send } from "lucide-react";


import { CheckCircle } from "lucide-react";
import Link from "next/link";

const benefits = [
    {
      title: "Diverse & Engaged Audience",
      description: "Connect with users who are genuinely interested in your brand, across niches and demographics."
    },
    {
      title: "Creative Ad Formats",
      description: "Stand out with image, video, carousel and story-style ad placements that fit mobile-first experiences."
    },
    {
      title: "Affordable Pricing",
      description: "Launch ad campaigns that are tailored to your budget, without compromising reach or quality."
    },
    {
      title: "Dedicated Support",
      description: "Our team assists you at every step — from strategy to performance optimization."
    }
  ];

  
export default function AdvertisingPage() {
  return (
    <div className="flex flex-col items-center w-full p-6 space-y-16">
    <header className="w-full flex justify-center p-2">
      <ClientNavbar/>
    </header>
    {/* Hero Section with Carousel */}
    <HeroCarousel/>


      {/* Advertiser Submission Form */}
      <section id="advertisingform" className="w-full max-w-3xl">
  <Card>
    <CardContent className="p-6 space-y-6">
      <h2 className="text-3xl font-bold">Advertiser Submission Form</h2>

      {/* Contact Info */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Advertiser/Brand Name</Label>
          <Input placeholder="Enter brand name" />
        </div>

        <div className="space-y-2">
          <Label>Contact Person Name</Label>
          <Input placeholder="Enter contact name" />
        </div>

        <div className="space-y-2">
          <Label>Email Address</Label>
          <Input type="email" placeholder="Enter email" />
        </div>

        <div className="space-y-2">
          <Label>Phone Number (optional)</Label>
          <Input placeholder="Phone number" />
        </div>

        <div className="space-y-2">
          <Label>Company Website or Social Media</Label>
          <Input placeholder="Website or social link" />
        </div>
      </div>

      {/* Ad Details */}
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Type of Ad</Label>
          <Input placeholder="e.g., Image, Video, Carousel" />
        </div>

        <div className="space-y-4">
            <Label className="text-lg font-semibold">Phleekz Ad Sizes & Dimensions</Label>

            <Accordion type="single" collapsible className="w-full">
              {/* Play (Reels-style video ads) */}
              <AccordionItem value="item-1">
                <AccordionTrigger>1. PLAY (Vertical Short Videos)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li><strong>Purpose:</strong> Full-screen immersive ads (Reels/TikTok style)</li>
                    <li><strong>Used For:</strong> Short-form video ads, influencer promos, music videos</li>
                    <li><strong>Dimensions:</strong> 1080 x 1920 pixels (9:16 aspect ratio)</li>
                    <li><strong>File Types:</strong> MP4, MOV</li>
                    <li><strong>Max Duration:</strong> 60 sec (best: 15–30 sec)</li>
                    <li><strong>File Size:</strong> Max 100MB</li>
                    <li><strong>Safe Area:</strong> Keep key text within 1080 x 1420</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Status (Story-like ads) */}
              <AccordionItem value="item-2">
                <AccordionTrigger>2. STATUS (Story-Like Ads)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li><strong>Purpose:</strong> Temporary ads like Stories or WhatsApp Status</li>
                    <li><strong>Used For:</strong> Flash sales, event countdowns, offers</li>
                    <li><strong>Dimensions:</strong> 1080 x 1920 pixels (9:16)</li>
                    <li><strong>File Types:</strong> MP4, JPG, PNG</li>
                    <li><strong>Max Duration:</strong> 15 sec per slide</li>
                    <li><strong>Carousel:</strong> Up to 4 slides</li>
                    <li><strong>File Size:</strong> 10MB (image), 50MB (video)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Home Feed (Static or Video Posts) */}
              <AccordionItem value="item-3">
                <AccordionTrigger>3. HOME FEED (Image or Video Posts)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li><strong>Purpose:</strong> Ads integrated into scrolling feed</li>
                    <li><strong>Used For:</strong> Product promos, quotes, brand messaging</li>
                    <li><strong>Options:</strong></li>
                    <ul className="pl-5">
                      <li>Square: 1080 x 1080 (1:1)</li>
                      <li>Vertical (preferred): 1080 x 1350 (4:5)</li>
                      <li>Horizontal: 1200 x 628 (1.91:1)</li>
                    </ul>
                    <li><strong>File Types:</strong> JPG, PNG, MP4</li>
                    <li><strong>Max Video Length:</strong> 60 sec</li>
                    <li><strong>Carousel:</strong> Up to 10 slides (1080 x 1080 each)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Bonus Tips */}
              <AccordionItem value="item-4">
                <AccordionTrigger>Bonus — Universal Ad Tips</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Keep text readable for small screens</li>
                    <li>Add captions/subtitles to videos</li>
                    <li>Logo: Top-left or bottom-right placement</li>
                    <li>CTA: Clear ("Shop Now", "Learn More", etc.)</li>
                    <li>Use safe margins for key elements</li>
                    <li>Add background music for Play/Status ads</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>


        {/* Targeting Details */}
        <Card className="border-dashed">
          <CardContent className="p-4 space-y-4">
            <h3 className="text-lg font-semibold">Targeting Details</h3>

            {/* Country Select */}
            <div className="space-y-2">
              <Label>Target Country</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Canada">Canada 🇨🇦</SelectItem>
                  <SelectItem value="USA">USA 🇺🇸</SelectItem>
                  <SelectItem value="Australia">Australia 🇦🇺</SelectItem>
                  <SelectItem value="United Kingdom">United Kingdom 🇬🇧</SelectItem>
                  <SelectItem value="New Zealand">New Zealand 🇳🇿</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Age Range */}
            <div className="flex space-x-4">
              <div className="flex-1 space-y-2">
                <Label>Min Age</Label>
                <Input type="number" placeholder="e.g., 18" />
              </div>
              <div className="flex-1 space-y-2">
                <Label>Max Age</Label>
                <Input type="number" placeholder="e.g., 45" />
              </div>
            </div>

            {/* Gender Select */}
            <div className="space-y-2">
              <Label>Gender</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Non-Binary">Non-Binary</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Industry Select */}
            <div className="space-y-2">
              <Label>Industry</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="max-h-64 overflow-y-auto">
                  {[
                    "Fashion & Apparel", "Food & Beverage", "Health & Wellness", "Technology", "Finance & Banking",
                    "Education & eLearning", "Real Estate", "Automotive", "Travel & Hospitality", "Beauty & Skincare",
                    "Entertainment & Media", "Sports & Fitness", "eCommerce & Retail", "Software & SaaS",
                    "Legal & Law Firms", "Nonprofit & Charity", "Events & Conferences", "Government & Politics",
                    "Home Decor & Furnishings", "Pets & Animals", "Kids & Parenting", "Music & Audio",
                    "Photography & Videography", "Gaming", "Spiritual & Religious"
                  ].map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Interests Select */}
            <div className="space-y-2">
              <Label>Interest</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select interest" />
                </SelectTrigger>
                <SelectContent className="max-h-64 overflow-y-auto">
                  {[
                    // Lifestyle
                    "Travel", "Fashion", "Luxury Lifestyle", "Streetwear", "Vegan Living", "Self-Care", "Dating & Relationships", "Parenting",
                    // Entertainment
                    "Movies", "TV Shows", "Celebrities", "Comedy", "Podcasts", "Memes", "Anime", "Music (Hip-Hop, Pop, Rock, etc.)",
                    // Sports
                    "Soccer", "Basketball", "Gym/Workout", "Yoga", "Running", "Bodybuilding", "eSports",
                    // Tech
                    "Smartphones", "Laptops", "Smart Home", "Gadgets", "Gaming Consoles", "Drones",
                    // Finance
                    "Investing", "Crypto", "Real Estate", "Entrepreneurship", "Side Hustles", "Business Startups",
                    // Beauty
                    "Makeup", "Haircare", "Skincare", "Perfumes", "Shoes", "Nails", "Jewelry",
                    // Education
                    "Online Courses", "Job Searching", "Study Hacks", "Work-from-Home", "Scholarships",
                    // Health
                    "Mental Health", "Meditation", "Diet & Nutrition", "Supplements", "Weight Loss",
                    // Shopping
                    "Amazon Finds", "Online Shopping", "Fashion Sales", "Unboxing Videos", "Product Reviews",
                    // Automotive
                    "Electric Cars", "Sports Cars", "Motorcycles", "Car Maintenance",
                    // Spiritual
                    "Bible Verses", "Law of Attraction", "Motivational Quotes", "Mindfulness"
                  ].map((interest) => (
                    <SelectItem key={interest} value={interest}>
                      {interest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </CardContent>
        </Card>

        {/* Budget and Dates */}
        <div className="space-y-2">
          <Label>Ad Budget</Label>
          <Input placeholder="Enter budget in USD" />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1 space-y-2">
            <Label>Start Date</Label>
            <Input type="date" />
          </div>
          <div className="flex-1 space-y-2">
            <Label>End Date</Label>
            <Input type="date" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Additional Notes</Label>
          <Textarea placeholder="Add any extra instructions here..." />
        </div>
      </div>

      {/* Agreement */}
      <div className="flex items-start space-x-2">
        <Checkbox id="agreement" />
        <Label htmlFor="agreement" className="text-sm">
          I agree to Phleekz’s Terms and Conditions and Privacy Policy
        </Label>
      </div>

      <Button
                size="lg"
                className="rounded-full w-full bg-black text-white px-8 py-3 
                 hover:bg-white hover:text-black transition-colors duration-200">Submit your ad</Button>
    </CardContent>
  </Card>
</section>

      
        <MobileAdsShowcase/>
     

      {/* Why Advertise on Phleekz? */}
      <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Why Advertise on <span className="text-primary">Phleekz?</span></h2>
      <p className="text-lg text-gray-600 mb-10">Grow faster by tapping into a platform designed to boost your brand's visibility and connection.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {benefits.map((item, index) => (
          <Card key={index} className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex items-center gap-3">
              <CheckCircle className="text-primary" />
              <CardTitle className="text-lg font-semibold text-gray-800">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    <section className="w-full px-6 py-16 bg-gray-50 flex flex-col items-center text-center space-y-8">
  <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800">
    Why Choose <span className="text-primary">Phleekz?</span>
  </h2>
  <p className="text-gray-600 max-w-2xl">
    Compare Phleekz performance and pricing with other top advertising platforms.
  </p>

  <div className="overflow-x-auto mt-8 w-full max-w-6xl">
    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead className="bg-primary text-white text-sm uppercase">
        <tr>
          <th className="py-4 px-6">Metric</th>
          <th className="py-4 px-6">Phleekz</th>
          <th className="py-4 px-6">TikTok</th>
          <th className="py-4 px-6">Instagram</th>
          <th className="py-4 px-6">Facebook</th>
          <th className="py-4 px-6">Twitter/X</th>
          <th className="py-4 px-6">Snapchat</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <tr className="even:bg-gray-100">
          <td className="py-4 px-6 font-semibold">CPC (Cost Per Click)</td>
          <td className="py-4 px-6 text-green-600 font-bold">$0.15 – $0.25</td>
          <td className="py-4 px-6">$0.30 – $1.00</td>
          <td className="py-4 px-6">$0.40 – $1.50</td>
          <td className="py-4 px-6">$0.50 – $2.00</td>
          <td className="py-4 px-6">$0.38 – $1.20</td>
          <td className="py-4 px-6">$0.50 – $1.00</td>
        </tr>
        <tr className="even:bg-gray-100">
          <td className="py-4 px-6 font-semibold">CPM (Cost per 1,000 Impressions)</td>
          <td className="py-4 px-6 text-green-600 font-bold">$3.00</td>
          <td className="py-4 px-6">$5.00 – $10.00</td>
          <td className="py-4 px-6">$6.00 – $12.00</td>
          <td className="py-4 px-6">$7.00 – $13.00</td>
          <td className="py-4 px-6">$6.50 – $12.00</td>
          <td className="py-4 px-6">$5.00 – $9.00</td>
        </tr>
        <tr className="even:bg-gray-100">
          <td className="py-4 px-6 font-semibold">Minimum Daily Budget</td>
          <td className="py-4 px-6 text-green-600 font-bold">$5</td>
          <td className="py-4 px-6">$20</td>
          <td className="py-4 px-6">$10</td>
          <td className="py-4 px-6">$5</td>
          <td className="py-4 px-6">$10</td>
          <td className="py-4 px-6">$10</td>
        </tr>
        <tr className="even:bg-gray-100">
          <td className="py-4 px-6 font-semibold">Ad Duration</td>
          <td className="py-4 px-6 text-green-600 font-bold">1–30 days</td>
          <td className="py-4 px-6">3–30 days</td>
          <td className="py-4 px-6">1–30 days</td>
          <td className="py-4 px-6">1–30 days</td>
          <td className="py-4 px-6">1–30 days</td>
          <td className="py-4 px-6">1–30 days</td>
        </tr>
        <tr className="even:bg-gray-100">
          <td className="py-4 px-6 font-semibold">Demographic Targeting</td>
          <td className="py-4 px-6 text-green-600 font-bold">Yes</td>
          <td className="py-4 px-6">Yes</td>
          <td className="py-4 px-6">Yes</td>
          <td className="py-4 px-6">Yes</td>
          <td className="py-4 px-6">Yes</td>
          <td className="py-4 px-6">Yes</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


      {/* FAQ Section */}
      <section className="max-w-3xl w-full mx-auto text-center">
  <div className="flex items-center justify-center gap-2 mb-6">
    <CircleHelp className="" size={28} />
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Frequently Asked Questions</h2>
  </div>
  <Accordion type="single" collapsible className="w-full text-left space-y-4">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-lg font-medium">
        How long does ad approval take?
      </AccordionTrigger>
      <AccordionContent className="text-gray-700">
        Usually within 1–2 business days. We strive to get your content live quickly!
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger className="text-lg font-medium">
        What ad formats are accepted?
      </AccordionTrigger>
      <AccordionContent className="text-gray-700">
        We support Images (JPG, PNG), Videos (MP4), Carousel Ads, and Text Ads.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger className="text-lg font-medium">
        Can I target specific audiences?
      </AccordionTrigger>
      <AccordionContent className="text-gray-700">
        Absolutely! You can target by age, location, interests, gender, and more.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger className="text-lg font-medium">
        How do I track ad performance?
      </AccordionTrigger>
      <AccordionContent className="text-gray-700">
        After your ad is live, we’ll provide insights via email or dashboard access (coming soon).
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>
{/* contact form */}
<section className="w-full max-w-2xl mx-auto relative z-10 px-4">
  <Card className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl">
    <CardContent className="p-8 space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  flex items-center justify-center gap-2">
          <MessageSquare className="w-6 h-6 " />
          Let’s Talk!
        </h2>
        <p className="text-gray-600 mt-2">Still have questions? Send us a message and we’ll get back to you shortly.</p>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
        </div>
        <Input placeholder="Subject" required />
        <Textarea placeholder="Your Message..." rows={5} required />

        <div className="text-center">
          <Button type="submit" size="lg" className="px-8">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
</section>

    </div>
  );
}
