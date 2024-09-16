"use client";
import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { Toaster, toast } from "sonner";

export default function Home() {
  return <section>
    <Navbar />
    <Banner/>
  <Content/>
  <Footer/>
  </section>;
}
