import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayasimha | AI & Machine Learning Engineer",
  description: "Futuristic personal portfolio of Jayasimha, an AI & Machine Learning student building computer vision models, neural networks, and smart IoT edge solutions.",
  keywords: ["Jayasimha", "AI Engineer", "Machine Learning", "Computer Vision", "IoT", "Next.js Portfolio", "ESP32", "Deep Learning", "TensorFlow"],
  authors: [{ name: "Jayasimha" }],
  openGraph: {
    title: "Jayasimha | AI & Machine Learning Engineer",
    description: "Futuristic personal portfolio of Jayasimha, an AI & Machine Learning student building computer vision models, neural networks, and smart IoT edge solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        {/* Custom mouse tracker effect */}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
