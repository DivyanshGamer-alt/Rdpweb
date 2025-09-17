
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Shield, 
  Zap, 
  Globe,
  ShoppingCart,
  Star,
  CheckCircle,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Clock,
  Users,
  Award
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Starter RDP",
      description: "Perfect for beginners and light usage",
      price: 19,
      period: "month",
      popular: false,
      specs: {
        cpu: "2 vCPU",
        ram: "4GB RAM",
        storage: "50GB SSD",
        bandwidth: "100 Mbps"
      },
      features: [
        "Windows Server 2019/2022",
        "24/7 Technical Support",
        "99.9% Uptime Guarantee",
        "Instant Setup",
        "Full Administrator Access"
      ]
    },
    {
      id: 2,
      name: "Professional RDP",
      description: "Ideal for business and professional use",
      price: 49,
      period: "month",
      popular: true,
      specs: {
        cpu: "4 vCPU",
        ram: "8GB RAM",
        storage: "100GB SSD",
        bandwidth: "500 Mbps"
      },
      features: [
        "Windows Server 2022",
        "Priority Support",
        "99.95% Uptime Guarantee",
        "Free Daily Backups",
        "DDoS Protection",
        "Custom Software Installation"
      ]
    },
    {
      id: 3,
      name: "Enterprise VPS",
      description: "Maximum performance for demanding applications",
      price: 99,
      period: "month",
      popular: false,
      specs: {
        cpu: "8 vCPU",
        ram: "16GB RAM",
        storage: "200GB SSD",
        bandwidth: "1 Gbps"
      },
      features: [
        "Dedicated Resources",
        "24/7 Dedicated Support",
        "99.99% Uptime SLA",
        "Advanced Security Features",
        "Load Balancing",
        "API Access"
      ]
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Software Developer",
      content: "StarRDP has been a game-changer for my development workflow. The performance is exceptional!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content: "Reliable service with excellent support. Our team productivity has increased significantly.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "IT Manager",
      content: "The enterprise features and security measures are exactly what we needed for our operations.",
      rating: 5
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 matrix-bg">
      <div className="relative z-10">
        {/* Header */}
        <motion.header 
          className="bg-black/20 backdrop-blur-sm border-b border-gray-700/50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <Server className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold cyber-text">StarRDP</span>
              </motion.div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
                <Button 
                  variant="outline" 
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart ({cart.length})
                </Button>
              </nav>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.section 
          className="py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div variants={itemVariants}>
              <Badge className="mb-6 bg-blue-500/10 border-blue-500/30 text-blue-300">
                <Award className="w-4 h-4 mr-2" />
                Premium RDP Solutions
              </Badge>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 cyber-text"
            >
              Power Your Business
              <br />
              <span className="gradient-text">With StarRDP</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Experience lightning-fast RDP and VPS solutions with enterprise-grade security, 
              99.9% uptime guarantee, and 24/7 expert support.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 energy-pulse interactive-hover"
              >
                Explore Products
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Products Section */}
        <motion.section 
          id="products"
          className="py-20 bg-black/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional-grade RDP and VPS solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white energy-pulse">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <Card className={`holographic-card interactive-hover h-full ${
                    product.popular ? 'ring-2 ring-blue-500/50 quantum-shadow' : ''
                  }`}>
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Monitor className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">
                        {product.name}
                      </CardTitle>
                      <p className="text-gray-400 mb-4">{product.description}</p>
                      <div className="flex items-end justify-center">
                        <span className="text-4xl font-bold cyber-text">${product.price}</span>
                        <span className="text-gray-400 ml-2">/{product.period}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Cpu className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300 text-sm">{product.specs.cpu}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <HardDrive className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{product.specs.ram}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Server className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300 text-sm">{product.specs.storage}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Wifi className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{product.specs.bandwidth}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        onClick={() => addToCart(product)}
                        className={`w-full py-3 ${
                          product.popular 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 energy-pulse' 
                            : 'bg-gray-800 hover:bg-gray-700 border border-gray-600'
                        } text-white font-semibold transition-all duration-300 interactive-hover`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          id="features"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
                Why Choose StarRDP?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade infrastructure with unmatched performance and security
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Enterprise Security",
                  description: "Military-grade encryption and advanced threat protection"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Lightning Performance",
                  description: "Ultra-low latency with SSD storage and high-speed networks"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "99.9% Uptime",
                  description: "Guaranteed availability with redundant infrastructure"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "24/7 Support",
                  description: "Expert technical support whenever you need it"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <Card className="glass-effect interactive-hover text-center h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          id="testimonials"
          className="py-20 bg-black/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who trust StarRDP
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="holographic-card interactive-hover h-full">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="bg-black/40 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center">
              <div className="flex justify-center items-center mb-6">
                <Server className="w-8 h-8 text-blue-400 mr-3" />
                <span className="text-2xl font-bold cyber-text">StarRDP</span>
              </div>
              <p className="text-gray-400 mb-6">
                Powering your digital transformation with enterprise-grade RDP solutions
              </p>
              <div className="text-gray-500">
                © 2024 StarRDP. All rights reserved.
              </div>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
