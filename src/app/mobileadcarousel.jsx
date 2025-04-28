"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegSave } from "react-icons/fa";
import { FiHome, FiSearch, FiPlusSquare } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa"
import { FaWifi } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function MobileAdsShowcase() {
  return (
    <section className="w-full min-h-screen py-16 px-0 bg-black text-white flex flex-col items-center">

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        See How Your Ads Shine on <span className="text-white">Phleekz</span> 🎯
      </motion.h2>

      <Tabs defaultValue="play" className="w-full max-w-5xl">
        <TabsList className="bg-black p-1 rounded-full shadow-md flex justify-between  items-center mb-8">
          <TabsTrigger value="play" className="px-6 py-2 font-semibold text-white hover:bg-gray-700 data-[state=active]:bg-white 
      data-[state=active]:text-black">Play Ads</TabsTrigger>
          <TabsTrigger value="status" className="px-6 py-2 font-semibold text-white hover:bg-gray-700 data-[state=active]:bg-white 
      data-[state=active]:text-black">Status Ads</TabsTrigger>
          <TabsTrigger value="homefeed" className="px-6 py-2 font-semibold text-white hover:bg-gray-700 data-[state=active]:bg-white 
      data-[state=active]:text-black">Home Feed Ads</TabsTrigger>
        </TabsList>

        {/* PLAY TAB */}
        <TabsContent value="play">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl md:text-6xl font-extrabold">Tell Your story</h3>
              <h2 className="text-4xl font-bold">With Phleekz video ads</h2>
              <p className="text-white max-w-md">
                Your ad takes over the entire screen in an immersive, TikTok-style reel format — perfect for grabbing instant attention!
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full border-2 border-black bg-white text-black px-8 py-3 
                 hover:bg-black hover:text-white transition-colors duration-200"
              >
                <Link href="#advertisingform">Get started</Link>
              </Button> 
            </div>
            <div className="w-[250px] h-[500px] bg-black rounded-3xl overflow-hidden shadow-2xl relative font-sans">
              {/* Top Bar */}
              <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-2 text-white bg-black text-xs">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <FaWifi />
                  <span>🔋</span>
                </div>
              </div>

              {/* Video Background */}
              <video
                src="/ad1.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Side Icons */}
              <div className="absolute right-4 bottom-[25%] flex flex-col items-center space-y-6 text-white">
                <FaHeart size={24} />
                <FaComment size={24} />
                <FaShare size={24} />
                <FaBookmark size={24} />

              </div>

              {/* Bottom Overlay */}
              <div className="absolute bottom-15 left-4 flex items-center space-x-3">
                <Image
                  src="/logoicon.jpg"
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="Profile"
                />
                <div className="text-white">
                  <p className="font-semibold">@phleekz</p>
                  <p className="text-xs">Follow</p>

                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white pr-8">
                <p className="text-sm font-medium">Big Summer Sale is Live! 🌞🛍️</p>
                <p className="text-xs text-gray-300">🎵 Phleekz Beats • Original Audio</p>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 flex justify-around items-center py-2 text-white text-xl">
                <FiHome />
                <FaPlay />
                <FiPlusSquare />
                <FiSearch />
                <IoPersonOutline />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* STATUS TAB */}
        <TabsContent value="status">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative w-[300px] h-[600px] rounded-2xl overflow-hidden shadow-xl bg-black">
              {/* Story Style Frame */}
              <Image
                src="/ad-status-cars.jpg"
                alt="Status Ad"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-4 left-4 text-white text-sm font-semibold">Flash Deal</div>
              <div className="absolute bottom-20 left-6 right-6 text-white text-xl font-bold">
                Drive In Style 🚗
              </div>
              <button className="absolute bottom-6 left-10 right-10 bg-white text-black py-2 rounded-full font-semibold">
                Learn More
              </button>
            </div>

            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold">Temporary Story Power</h3>
              <p className="text-white max-w-md">
                Showcase flash sales, promos, or event countdowns with beautiful Status-style ads that feel urgent and authentic.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* HOMEFEED TAB */}
        <TabsContent value="homefeed">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Card className="w-full md:w-[400px] overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/ad-homefeed-watches.jpg"
                  alt="Home Feed Ad"
                  width={800}
                  height={1000}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg">Timeless Elegance ⌚️</h4>
                  <p className="text-sm text-white mt-2">
                    Discover our new luxury watch collection now. Perfect for every occasion.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold">Seamless Scroll Experience</h3>
              <p className="text-white max-w-md">
                Your ad blends naturally into the feed with static or video creatives, making engagement feel effortless and authentic.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
