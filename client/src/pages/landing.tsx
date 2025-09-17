import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Shield, 
  Zap, 
  Globe, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Play,
  Monitor,
  Cloud,
  Lock,
  HardDrive,
  Wifi
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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
      stiffness: 100,
      damping: 10
    }
  }
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Landing() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === "fxpl.hi2@gmail.com" && password === "Starkaowner@123") {
      window.location.href = "/admin";
    } else {
      alert("Invalid credentials");
    }
    setIsLoading(false);
  };

  const features = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Premium RDP",
      description: "High-performance Remote Desktop Protocol with 24/7 uptime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and advanced security protocols",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Ultra-low latency with global CDN infrastructure",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Servers in 50+ countries for optimal performance",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const plans = [
    {
      name: "Starter RDP",
      price: "$19",
      period: "/month",
      popular: false,
      features: [
        "2 vCPU Cores",
        "4GB RAM",
        "50GB SSD Storage",
        "100 Mbps Network",
        "24/7 Support",
        "99.9% Uptime"
      ]
    },
    {
      name: "Professional RDP",
      price: "$49",
      period: "/month",
      popular: true,
      features: [
        "4 vCPU Cores",
        "8GB RAM",
        "100GB SSD Storage",
        "500 Mbps Network",
        "Priority Support",
        "99.95% Uptime",
        "Free Backups"
      ]
    },
    {
      name: "Enterprise VPS",
      price: "$99",
      period: "/month",
      popular: false,
      features: [
        "8 vCPU Cores",
        "16GB RAM",
        "200GB SSD Storage",
        "1 Gbps Network",
        "Dedicated Support",
        "99.99% Uptime",
        "Advanced Security"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative z-10 pt-20 pb-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <Badge 
                variant="outline" 
                className="mb-4 bg-blue-500/10 border-blue-500/30 text-blue-300 text-sm px-4 py-2"
              >
                <Star className="w-4 h-4 mr-2 fill-current" />
                #1 Premium RDP Provider
              </Badge>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight"
            >
              Professional RDP & VPS
              <br />
              <span className="gradient-text">Solutions</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Experience enterprise-grade virtual servers with unmatched performance, 
              security, and global reach. Built for professionals who demand excellence.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg glow-effect transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-600 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-8 opacity-60"
            >
              {[Server, Monitor, Cloud, Shield, Zap, Globe].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center"
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  animate={floatingAnimation}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-8 h-8 text-gray-400" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="relative z-10 py-20 bg-black/20 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology meets exceptional service to deliver the ultimate virtual server experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 mx-auto`}
                      animate={pulseAnimation}
                    >
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="relative z-10 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`relative ${plan.popular ? 'z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`bg-gray-900/70 border-gray-700/50 backdrop-blur-sm h-full ${
                  plan.popular ? 'ring-2 ring-blue-500/50 glow-effect' : ''
                }`}>
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-white mb-4">
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-end justify-center">
                      <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full py-3 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow-effect' 
                          : 'bg-gray-800 hover:bg-gray-700 border border-gray-600'
                      } text-white font-semibold transition-all duration-300`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Admin Login Section */}
      <motion.section 
        className="relative z-10 py-20 bg-black/30 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6 max-w-md">
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/80 border-gray-700/50 backdrop-blur-sm glow-effect">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl gradient-text">
                  <Lock className="w-8 h-8 mx-auto mb-2" />
                  Admin Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAuth} className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-800/50 border-gray-600 text-white mt-2"
                      placeholder="Enter admin email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-gray-300">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-800/50 border-gray-600 text-white mt-2"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow-effect"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : null}
                    {isLoading ? 'Authenticating...' : 'Access Dashboard'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="relative z-10 bg-black/40 backdrop-blur-sm py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex justify-center items-center mb-6">
              <Server className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-2xl font-bold gradient-text">StarRDP</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium RDP & VPS Solutions - Empowering Your Digital Journey
            </p>
            <div className="flex justify-center space-x-8 text-gray-400">
              <span>© 2024 StarRDP. All rights reserved.</span>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}