
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Server, 
  DollarSign, 
  Activity,
  Settings,
  Bell,
  BarChart3,
  TrendingUp,
  Shield,
  Monitor,
  Globe,
  Zap,
  UserPlus,
  CreditCard,
  AlertTriangle,
  CheckCircle
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
      stiffness: 100,
      damping: 10
    }
  }
};

const statsVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    {
      title: "Total Revenue",
      value: "$124,596",
      change: "+12.5%",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Active Servers",
      value: "2,847",
      change: "+8.2%",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Total Users",
      value: "18,249",
      change: "+23.1%",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "System Uptime",
      value: "99.98%",
      change: "+0.02%",
      icon: <Activity className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const recentOrders = [
    { id: "ORD-001", user: "John Doe", plan: "Professional RDP", amount: "$49", status: "active" },
    { id: "ORD-002", user: "Jane Smith", plan: "Enterprise VPS", amount: "$99", status: "pending" },
    { id: "ORD-003", user: "Mike Johnson", plan: "Starter RDP", amount: "$19", status: "active" },
    { id: "ORD-004", user: "Sarah Wilson", plan: "Professional RDP", amount: "$49", status: "expired" },
    { id: "ORD-005", user: "David Brown", plan: "Enterprise VPS", amount: "$99", status: "active" }
  ];

  const systemAlerts = [
    { type: "warning", message: "Server maintenance scheduled for tonight", time: "2 hours ago" },
    { type: "success", message: "Payment system updated successfully", time: "4 hours ago" },
    { type: "info", message: "New user registrations increased by 15%", time: "6 hours ago" },
    { type: "error", message: "Server NYC-01 experiencing high load", time: "8 hours ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'expired': return 'bg-red-500/20 text-red-400 border-red-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'success': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Bell className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          className="bg-black/20 backdrop-blur-sm border-b border-gray-700/50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Server className="w-8 h-8 text-blue-400" />
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold gradient-text">StarRDP Admin</h1>
                  <p className="text-gray-400 text-sm">Welcome back, Administrator</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-6 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TabsList className="bg-gray-800/50 border border-gray-700/50">
                <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-600">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="orders" className="data-[state=active]:bg-blue-600">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Orders
                </TabsTrigger>
                <TabsTrigger value="users" className="data-[state=active]:bg-blue-600">
                  <Users className="w-4 h-4 mr-2" />
                  Users
                </TabsTrigger>
                <TabsTrigger value="servers" className="data-[state=active]:bg-blue-600">
                  <Monitor className="w-4 h-4 mr-2" />
                  Servers
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="dashboard" className="space-y-8">
              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {stats.map((stat, index) => (
                  <motion.div key={index} variants={statsVariants} whileHover={{ y: -5 }}>
                    <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm glow-effect">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-400 text-sm font-medium mb-2">{stat.title}</p>
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                            <div className="flex items-center mt-2">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                              <span className="text-green-400 text-sm">{stat.change}</span>
                            </div>
                          </div>
                          <motion.div 
                            className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                              {stat.icon}
                            </div>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Charts and Activity */}
              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div
                  className="lg:col-span-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                        Revenue Analytics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center bg-gray-800/30 rounded-lg">
                        <motion.div
                          className="text-gray-400"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Revenue chart visualization would go here
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Bell className="w-5 h-5 mr-2 text-yellow-400" />
                        System Alerts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {systemAlerts.map((alert, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/30"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          {getAlertIcon(alert.type)}
                          <div className="flex-1">
                            <p className="text-gray-300 text-sm">{alert.message}</p>
                            <p className="text-gray-500 text-xs mt-1">{alert.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-green-400" />
                      Recent Orders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order, index) => (
                        <motion.div
                          key={order.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 border border-gray-700/30"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.01, backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <UserPlus className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-medium">{order.user}</p>
                              <p className="text-gray-400 text-sm">{order.plan}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-green-400 font-bold">{order.amount}</span>
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center py-20"
              >
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">User Management</h3>
                <p className="text-gray-400">Advanced user management features coming soon</p>
              </motion.div>
            </TabsContent>

            <TabsContent value="servers" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center py-20"
              >
                <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Server Management</h3>
                <p className="text-gray-400">Server monitoring and management tools coming soon</p>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
