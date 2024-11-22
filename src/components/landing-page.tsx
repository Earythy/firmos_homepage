'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ChevronRight, ChevronLeft, Menu, X, ArrowRight, Zap, Users, BarChart3, Clock, PlayCircle, Award, Search, ChevronDown } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const growShrinkKeyframes = {
  '0%, 100%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.05)' }
}

type FAQItem = {
  question: string
  answer: string
}

type FAQCategory = {
  category: string
  icon: React.ReactNode
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    category: "General",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    items: [
      {
        question: "What is FirmOS and how can it benefit my accounting firm?",
        answer: "FirmOS automates your operations, helping your accounting firm scale efficiently while staying competitive and profitable. We build to reduce your daily involvement, allowing you to focus on strategic growth, transforming your firm into a high-value, autonomous business."
      },
      {
        question: "How does FirmOS help with attracting and retaining high-value clients?",
        answer: "FirmOS combines strategic goal-setting, targeted outreach, and personalized nurturing to attract and retain high-value clients. By aligning your firm's branding, generating awareness, and converting leads through tailored strategies, we ensure sustainable growth and client loyalty."
      }
    ]
  },
  {
    category: "Products",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    items: [
      {
        question: "What sets FirmOS apart from other solutions?",
        answer: "FirmOS is tailored for accounting firms, combining expert CPA guidance with custom automation. We streamline operations, generate qualified leads, and deliver data-driven results .A fully done-for-you service, you won't find anything like."
      },
      {
        question: "Do you offer a guarantee?",
        answer: "FirmOS offers a 30-Day Satisfaction-Based Refund. If you're not satisfied with our service with in the first 30 days, we'll refund your retainer, no questions asked."
      },
      {
        question: "What kind of support does FirmOS offer during implementation?",
        answer: "FirmOS provides full support from onboarding to ongoing optimization. We have a channel on our platform open 24/7 for any issues or questions, ensuring you always have the support you need."
      }
    ]
  }
]

const products = [
  {
    title: 'AI Talent Management',
    timeline: '30 Days',
    description: 'Advanced AI-powered system for recruiting, employee development, and workforce optimization.',
    position: 'top',
    color: '#2A2A2A',
  },
  {
    title: 'AI Inbox Manager',
    timeline: '45 Days',
    description: 'Smart email management system that prioritizes, categorizes, and automates responses.',
    position: 'bottom',
    color: '#454545',
  },
  {
    title: 'AI Content Generator',
    timeline: '60 Days',
    description: 'Automated content creation tool for marketing materials, social media, and documentation.',
    position: 'top',
    color: '#707070',
  },
  {
    title: 'AI Marketing Analytics',
    timeline: '90 Days',
    description: 'Comprehensive analytics platform for tracking and optimizing marketing campaigns.',
    position: 'bottom',
    color: '#8A8A8A',
  },
  {
    title: 'AI Financial Management',
    timeline: '120 Days',
    description: 'Automated system for managing invoices, track expenses, and financial reporting.',
    position: 'top',
    color: '#A5A5A5',
  },
]

const styles = {
  container: `min-h-screen bg-[#000000] text-white py-20 px-4 md:px-8`,
  header: `text-center mb-20`,
  roadmapContainer: `relative max-w-7xl mx-auto mt-16`,
  timeline: `flex justify-between items-center mb-32`,
  arrowContainer: `relative flex-1 h-24 flex items-stretch transition-all duration-300 cursor-pointer group`,
  rectangle: `flex-1 flex items-center justify-center transition-all duration-300`,
  triangle: `w-8 transition-all duration-300`,
  arrowContent: `absolute inset-0 flex items-center justify-center text-2xl font-bold`,
  title: `absolute text-xl font-bold transition-all duration-300 w-48 text-center`,
  description: `mt-16`,
}



function TimelineSegment({
  product,
  index,
  isSelected,
  onSelect,
}: {
  product: { position: string; [key: string]: any }; // Define 'position' and allow additional properties
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
})

{
  const isTop = product.position === 'top'
  const hoverColor = '#FE7443'
  
  return (
    <div 
      className={styles.arrowContainer}
      onClick={() => onSelect(index)}
    >
      {/* Rectangle part */}
      <div 
        className={`${styles.rectangle} relative group-hover:bg-[#FE7443]`}
        style={{ 
          backgroundColor: isSelected ? hoverColor : product.color,
        }}
      >
        <span className={`text-2xl font-bold z-10 transition-colors duration-300
          ${index > 2 ? 'text-[#323232] group-hover:text-white' : 'text-white'}
          ${isSelected ? 'text-white' : ''}`}
        >
          {product.timeline}
        </span>
      </div>

      {/* Triangle part */}
      <div 
        className={`${styles.triangle} group-hover:bg-[#FE7443]`}
        style={{
          clipPath: 'polygon(0 0, 0 100%, 100% 50%)',
          backgroundColor: isSelected ? hoverColor : product.color,
        }}
      />
      
      <div 
        className={`${styles.title} 
          ${isTop ? '-top-20' : 'bottom-[-5rem]'}
          left-[calc(50%-6rem)]
          ${isSelected ? 'text-[#FE7443]' : 'group-hover:text-[#FE7443]'}
          ${index > 2 ? 'text-[#323232]' : 'text-white'}`}
      >
        {product.title}
      </div>
    </div>
  )
}

export function LandingPageComponent() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [activeClientVideo, setActiveClientVideo] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openFAQItems, setOpenFAQItems] = useState<{ [key: string]: boolean }>({})
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRoadmapIndex, setSelectedRoadmapIndex] = useState(0)

  const videos = [
    {
      title: "AI Inbox Manager",
      url: "https://youtu.be/u8xN-hWSnoo",
      description: "Revolutionize Your Email Management. Say goodbye to inbox overload. Our AI Inbox Manager intelligently prioritizes, categorizes, and responds to emails, ensuring you stay organized and focused on what matters most."
    },
    {
      title: "AI Content Generator",
      url: "https://youtu.be/rseJGWxFCVo",
      description: "Unleash Your Creative Potential. Creating high-quality content consistently is a challenge. Our AI Content Generator assists you in producing engaging articles, social media posts, marketing copy, and more, all tailored to your brand voice."
    },
    {
      title: "AI Marketing Analytics",
      url: "https://youtu.be/zaQyYuYxSuQ",
      description: "Drive Data-Driven Decisions. Unlock deep insights into your marketing performance with our AI Marketing Analytics tool. Analyze data from multiple channels to optimize your strategies and maximize ROI."
    }
  ]

  const clientVideos = [
    { 
      name: "Aaron Ready, CPA", 
      operations: "The Non Profit CFO", 
      url: "https://youtu.be/mSjAeEvvnf0",
      overview: "Transformed their operations with FirmOS, reducing administrative overwhelm and boosting efficiency. By streamlining workflows and leveraging cutting-edge technology, we saved the team valuable time, resolved recruitment challenges, and enabled a sharper focus on client services. The result: improved productivity, enhanced growth opportunities, and a modernized approach to business management, positioning them as a leader in their industry."
    },
    { 
      name: "Abir Seyed, CPA", 
      operations: "Upcounting", 
      url: "https://youtu.be/Hs8aNN9QIHY",
      overview: "Elevated their marketing efforts with FirmOS, leveraging our unique blend of accounting expertise and advanced marketing knowledge. By focusing on social media and blog content, we built a strong online presence aligned with their branding, saving them time and effort. This trust-driven partnership empowered them to connect with their target audience effectively, enhancing their brand visibility and establishing a competitive edge in their industry."
    },
    { 
      name: "Scott Amano, CPA", 
      operations: "Amano FAS", 
      url: "https://youtu.be/pJqq9M1pR74",
      overview: "Amano FAS harnessed the power of FirmOS to optimize their sustainable energy projects, leading to a 25% increase in energy efficiency and a 35% reduction in project costs. Our data-driven solutions enabled better resource management and predictive maintenance strategies."
    },
    { 
      name: "Imran Jiwa, CPA", 
      operations: "LiftCPA", 
      url: "https://youtu.be/1DSs0PUCAcA",
      overview: "LiftCPA utilized FirmOS to streamline their healthcare operations, resulting in a 20% improvement in patient care quality and a 15% reduction in administrative overhead. Our secure, HIPAA-compliant platform enhanced data management and facilitated better interdepartmental collaboration."
    },
    { 
      name: "Dominic Wong", 
      operations: "Invoke Digital", 
      url: "https://youtu.be/jnrde6jB0Jc",
      overview: "Invoke Digital optimized their international trade processes with FirmOS, achieving a 45% reduction in customs clearance times and a 60% improvement in supply chain visibility. Our global-ready solutions facilitated seamless cross-border transactions and real-time inventory management."
    },
    { 
      name: "Mathew Cohen", 
      operations: "Incommon Projects", 
      url: "https://youtu.be/G4AvCFjtQWA",
      overview: "Incommon Projects transformed their educational technology offerings using FirmOS, leading to a 55% increase in student engagement and a 40% improvement in learning outcomes. Our adaptive learning algorithms and analytics tools revolutionized personalized education delivery."
    }
  ]


  const overviewItems = [
    { icon: Zap, title: "Business Development", description: "Attract high-value clients and build a consistent pipeline." },
    { icon: Users, title: "Talent Management", description: "Retain top talent and empower your team for success." },
    { icon: BarChart3, title: "Operations", description: "Streamline processes and improve workflow efficiency." },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextClientVideo = () => {
    setActiveClientVideo((prev) => (prev + 1) % clientVideos.length)
  }

  const prevClientVideo = () => {
    setActiveClientVideo((prev) => (prev - 1 + clientVideos.length) % clientVideos.length)
  }

  const prevIndex = (activeClientVideo - 1 + clientVideos.length) % clientVideos.length
  const nextIndex = (activeClientVideo + 1) % clientVideos.length

  const toggleFAQItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`
    setOpenFAQItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const filteredFAQ = faqData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0)

  const hasResults = filteredFAQ.length > 0

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#000000] text-[#FFFFFF]">
      <div className="relative">
        {/* Navigation Bar */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#000000]/90 backdrop-blur-sm' : 'bg-transparent'} py-4`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link href="#" className="flex items-center">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FirmOS%20Logo%20-%20White-ccaDc4vMhJOlqCR9jcM2XDUIHbHJ28.png" 
                  alt="FirmOS Logo" 
                  width={180} 
                  height={40} 
                  className="h-12 w-auto" 
                  priority 
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <div className="bg-[#323232]/40 backdrop-blur-sm rounded-full px-6 py-2 flex items-center space-x-6">
                  <Link href="#" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    Home
                  </Link>
                  <Link href="#products" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    AI Products
                  </Link>
                  <Link href="#about" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    About Us
                  </Link>
                  <Link href="#success" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    Client Success Stories
                  </Link>
                  <Link href="#roadmap" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    Road Map
                  </Link>
                  <Link href="#faq" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    FAQ
                  </Link>
                  <Link
                    href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
                    className="bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-6 py-3 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
                    style={{ animation: 'growShrink 2s ease-in-out infinite' }}
                  >
                    Subscribe Now!
                  </Link>
                </div>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#FE7443] text-[#FFFFFF] rounded-full flex items-center gap-2 hover:bg-[#FE8F68] transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule a Demo
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-[#FFFFFF]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden bg-[#323232]/95 backdrop-blur-sm p-4 absolute w-full left-0 rounded-b-xl">
                <div className="flex flex-col space-y-4">
                  <Link href="#" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    Home
                  </Link>
                  <Link href="#products" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    AI Products
                  </Link>
                  <Link href="#about" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    About Us
                  </Link>
                  <Link href="#success" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    Client Success Stories
                  </Link>
                  <Link href="#roadmap" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    Road Map            
                  </Link>
                  <Link href="#faq" className="text-[#FFFFFF] hover:bg-[#666666] hover:bg-opacity-50 px-3 py-1 rounded-full transition-colors">
                    FAQ
                  </Link>
                  <Link
                    href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
                    className="bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-4 py-2 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-center"
                    style={{ animation: 'growShrink 2s ease-in-out infinite' }}
                  >
                    Subscribe Now!
                  </Link>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#FE7443] text-[#FFFFFF] w-full rounded-full flex items-center justify-center gap-2 hover:bg-[#FE8F68] transition-all duration-300 transform hover:scale-105"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule a Demo
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-[#323232]/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-6">
                Strategic FirmOS Solutions
              </h1>
              <p className="text-lg md:text-xl text-[#CCCCCC] max-w-3xl mx-auto">
                Elevate your accounting practice with our meticulously crafted suite of professional tools. Select the optimal FirmOS package to revolutionize your firm's efficiency, client engagement, and growth potential.
              </p>
            </div>
          </div>
        </section>

        {/* Video Carousel Section */}
        <section className="py-16 px-4" id="products">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Video Buttons (2/12 width) */}
              <div className="md:col-span-2 flex md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
                {videos.map((video, index) => (
                  <Button
                    key={index}
                    onClick={() => setActiveVideo(index)}
                    className={`text-left w-full h-16 ${
                      activeVideo === index
                        ? 'bg-gradient-to-r from-[#FE7443] to-[#FE8F68]'
                        : 'bg-[#323232]/60'
                    } text-[#FFFFFF] rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-between px-4 py-3`}
                  >
                    <span className="text-sm font-semibold flex-1 whitespace-normal md:block hidden">{video.title}</span>
                    <span className="text-sm font-semibold md:hidden">{index + 1}</span>
                    <ChevronRight className="h-4 w-4 flex-shrink-0 ml-2" />
                  </Button>
                ))}
              </div>

              {/* Video Player (7/12 width) */}
              <div className="md:col-span-7 aspect-video">
                <iframe
                  src={videos[activeVideo].url.replace('youtu.be/', 'youtube.com/embed/')}
                  className="w-full h-full rounded-xl shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description Card (3/12 width) */}
              <Card className="md:col-span-3 bg-[#323232]/40 backdrop-blur-sm text-[#FFFFFF]">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-4">{videos[activeVideo].title}</h3>
                  <p className="flex-grow mb-6 text-[#CCCCCC]">{videos[activeVideo].description}</p>
                  <Link
                    href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
                    className="bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-6 py-3 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 text-center font-semibold shadow-lg hover:shadow-xl"
                    style={{ animation: 'growShrink 2s ease-in-out infinite' }}
                  >
                    Get it Now!
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#323232] to-[#000000]">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">Welcome to FirmOS</h2>
              <p className="text-xl text-[#CCCCCC]">Your Partner in Scalable Growth and Operational Excellence</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6"
              >
                <p className="text-[#E5E5E5] leading-relaxed">
                  FirmOS is the all-in-one platform designed exclusively for fractional CFOs and accounting firms. With a focus on Business Development, Talent, Operations, and Finance, we provide innovative tools to streamline processes, attract high-value clients, and empower your team—all while ensuring financial stability.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6"
              >
                <p className="text-[#E5E5E5] leading-relaxed">
                  Our mission is to help accounting firms overcome growth challenges and scale sustainably with AI-powered automation and strategic systems. Whether you're looking to improve workflow efficiency, retain top talent, or build a consistent client pipeline, FirmOS is here to transform the way you work and grow your business.
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {overviewItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * (index + 3) }}
                  className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6 hover:bg-[#999999]/40 transition-all duration-300"
                >
                  <item.icon className="w-12 h-12 text-[#FE7443] mb-4" />
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">{item.title}</h3>
                  <p className="text-[#CCCCCC]">{item.description}</p>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-[#666666]/40 backdrop-blur-sm rounded-xl p-6 hover:bg-[#999999]/40 transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-1"
              >
                <Clock className="w-12 h-12 text-[#FE7443] mb-4" />
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">FIRMOS CONSULTING</h3>
                <p className="text-[#CCCCCC] mb-4">
                  Bi-weekly strategy sessions with tailored advice, templates, and actionable steps to optimize operations, strategies, and team performance.
                </p>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-12"
            >
              <p className="text-xl text-[#E5E5E5] mb-6">Let's redefine success in the accounting industry—together.</p>
              <Link
                href="https://app.firmos.ai/apps?id=3f717854-c530-470b-a56b-f53e82e296e7"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-8 py-3 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Client Success Stories Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#000000] to-[#323232]" id="success">
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-12 text-center"
            >
              Client Success Stories
            </motion.h2>

            <div className="relative flex items-center justify-center gap-4 mb-12">
              {/* Previous Video */}
              <div 
                className="relative w-1/4 aspect-video cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={prevClientVideo}
              >
                <div className="absolute inset-0 bg-[#000000]/30 backdrop-blur-[2px] rounded-xl" />
                <iframe
                  src={clientVideos[prevIndex].url.replace('youtu.be/', 'youtube.com/embed/')}
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronLeft className="w-12 h-12 text-[#FFFFFF]" />
                </div>
              </div>

              {/* Current Video */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeClientVideo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-1/2 aspect-video z-10"
                >
                  <div className="relative h-full">
                    <iframe
                      src={clientVideos[activeClientVideo].url.replace('youtu.be/', 'youtube.com/embed/')}
                      className="w-full h-full rounded-xl shadow-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next Video */}
              <div 
                className="relative w-1/4 aspect-video cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={nextClientVideo}
              >
                <div className="absolute inset-0 bg-[#000000]/30 backdrop-blur-[2px] rounded-xl" />
                <iframe
                  src={clientVideos[nextIndex].url.replace('youtu.be/', 'youtube.com/embed/')}
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronRight className="w-12 h-12 text-[#FFFFFF]" />
                </div>
              </div>
            </div>

            {/* Client Info and Success Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-4xl mx-auto"
            >
              <Card className="bg-[#666666]/60 backdrop-blur-md text-[#FFFFFF] overflow-hidden border-none">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h3 className="text-3xl font-bold mb-2 md:mb-0">{clientVideos[activeClientVideo].name}</h3>
                    <p className="text-xl text-[#FEC7B3]">{clientVideos[activeClientVideo].operations}</p>
                  </div>
                  <div className="bg-[#323232]/40 rounded-lg p-6">
                    <h4 className="text-2xl font-bold mb-4 flex items-center">
                      <Award className="w-6 h-6 mr-2 text-[#FE7443]" />
                      Success Overview
                    </h4>
                    <p className="text-[#E5E5E5] leading-relaxed">
                      {clientVideos[activeClientVideo].overview}
                    </p>
                  </div>
                  <div className="mt-8 flex justify-center">
                  <Button 
  onClick={() => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="bg-[#FE7443] hover:bg-[#FE8F68] text-[#FFFFFF] font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-lg"
>
  Explore Our Solutions
</Button>

                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8">
              {clientVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveClientVideo(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                    index === activeClientVideo ? 'bg-[#FE7443] scale-125' : 'bg-[#FFFFFF]/50 hover:bg-[#FFFFFF]/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className={styles.container} id="roadmap">
          <div className={styles.header}>
            <motion.div 
              className="inline-block bg-gradient-to-r from-[#FE7443] to-[#FEAB8E] p-1 rounded-lg mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-black px-6 py-3 rounded-lg">
                Product Roadmap
              </h1>
            </motion.div>
            <motion.p
              className="text-xl text-[#CCCCCC] max-w-2xl mx-auto mt-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our product roadmap outlines the strategic direction and planned features for our AI-powered solutions. It provides a clear timeline of upcoming developments, ensuring transparency and alignment with our users' evolving needs.
            </motion.p>
          </div>

          <div className="h-10"></div> {/* Adds 10px height space */}
          
          <div className={styles.roadmapContainer}>
            <div className={styles.timeline}>
              {products.map((product, index) => (
                <TimelineSegment
                  key={index}
                  product={product}
                  index={index}
                  isSelected={selectedRoadmapIndex === index}
                  onSelect={setSelectedRoadmapIndex}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRoadmapIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.description}
              >
                <Card className="bg-[#323232] border-[#666666]">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#FE7443] mb-4">
                      {products[selectedRoadmapIndex].title}
                    </h3>
                    <p className="text-lg text-[#CCCCCC] leading-relaxed">
                      {products[selectedRoadmapIndex].description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#323232] to-[#000000]" id="faq">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FE7443] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pr-12 rounded-full border-2 border-[#FE7443] bg-transparent text-[#FFFFFF] placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#FE7443] focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#FE7443]">
                <Search size={20} />
              </div>
            </div>

            {hasResults ? (
              filteredFAQ.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#FE7443] p-3 rounded-full mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-semibold text-[#FE7443]">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const isOpen = openFAQItems[`${categoryIndex}-${itemIndex}`]
                      return (
                        <div
                          key={itemIndex}
                          className="bg-[#1A1A1A] rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFAQItem(categoryIndex, itemIndex)}
                            className="w-full text-left p-6 flex justify-between items-center hover:bg-[#323232] transition-colors duration-300"
                          >
                            <span className="text-lg font-medium text-[#FFFFFF]">{item.question}</span>
                            <ChevronDown
                              size={24}
                              className={`text-[#FE7443] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="p-6 text-[#CCCCCC]">{item.answer}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-[#CCCCCC] mb-4">No results found. Maybe ask that question to us!</p>
                <Link
                  href="https://app.firmos.ai/messaging"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] px-6 py-3 rounded-full hover:from-[#FE8F68] hover:to-[#FE7443] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  Ask a Question
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Calendar Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-[#323232] text-[#FFFFFF]">
            <DialogHeader>
              <DialogTitle>Schedule a Call</DialogTitle>
            </DialogHeader>
            <div className="p-6">
              <div className="bg-[#666666]/40 p-8 rounded-xl text-center">
                <p className="mb-4">Calendar integration placeholder</p>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] hover:from-[#FE8F68] hover:to-[#FE7443] rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export { LandingPageComponent as Component };