"use client"

import { useState } from "react"
// import Link from "next/link"
// import { ArrowLeft, GraduationCap, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
// import { Checkbox } from "@/components/ui/checkbox"
// import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { AlertCircle } from "lucide-react"

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState("login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true);

        if (username === "jancetanaedu@2025" && password === "janchetana3110") {
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            localStorage.setItem("authenticated", "true")

            toast("Login successful", {
                description: "Redirecting to your dashboard...",
                duration: 2000,
            })

            setSubmitting(false);
            setTimeout(() => {
                router.push("/dashboard")
            }, 1000)
        } else {
            toast("Invalid credentials", {
                description: "Please check your username and password",
            })
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/20 dark:bg-gray-900/30 p-4">
            <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-center mb-6">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-2xl font-bold">Janchetana</h1>
                    </div>
                </div>
                <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-1 mb-4">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        {/* <TabsTrigger value="signup">Sign Up</TabsTrigger> */}
                    </TabsList>
                    <TabsContent value="login">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Welcome back</CardTitle>
                                    <CardDescription>Enter your credentials to access your account</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {/* <div className="">
                                    <Button variant="outline" className="w-full">
                                        <Mail className="h-4 w-4 mr-2" />
                                        <span className="sr-only sm:not-sr-only sm:text-xs md:text-sm">Google</span>
                                    </Button>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <Separator className="w-full" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                                    </div>
                                </div> */}
                                    <div className="space-y-2">
                                        <Label htmlFor="username">Email</Label>
                                        <Input
                                            id="username"
                                            type="username"
                                            placeholder="janchetana@edu"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password">Password</Label>
                                            {/* <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                                            Forgot password?
                                        </Link> */}
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="********"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    {/* <div className="flex items-center space-x-2">
                                    <Checkbox id="remember" />
                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Remember me
                                    </label>
                                </div> */}
                                </CardContent>
                                <CardFooter className="flex flex-col gap-4">
                                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                        {
                                            submitting ? "Logging In..." : "Login"
                                        }
                                    </Button>
                                    {/* <p className="text-center text-sm text-muted-foreground">
                                    Don&apos;t have an account?{" "}
                                    <button onClick={() => setActiveTab("signup")} className="text-primary hover:underline">
                                        Sign up
                                    </button>
                                </p> */}
                                </CardFooter>
                            </Card>
                        </form>
                    </TabsContent>
                    {/* <TabsContent value="signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>Create an account</CardTitle>
                                <CardDescription>Enter your information to create a new account</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="">
                                    <Button variant="outline" className="w-full">
                                        <Mail className="h-4 w-4 mr-2" />
                                        <span className="sr-only sm:not-sr-only sm:text-xs md:text-sm">Google</span>
                                    </Button>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <Separator className="w-full" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name">First name</Label>
                                        <Input id="first-name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name">Last name</Label>
                                        <Input id="last-name" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="signup-email">Email</Label>
                                    <Input id="signup-email" type="email" placeholder="your.email@example.com" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-password">Password</Label>
                                        <Input id="signup-password" type="password" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirm-password">Confirm password</Label>
                                        <Input id="confirm-password" type="password" />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I agree to the{" "}
                                        <Link href="/terms" className="text-primary hover:underline">
                                            terms and conditions
                                        </Link>
                                    </label>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col gap-4">
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                    Create account
                                </Button>
                                <p className="text-center text-sm text-muted-foreground">
                                    Already have an account?{" "}
                                    <button onClick={() => setActiveTab("login")} className="text-primary hover:underline">
                                        Login
                                    </button>
                                </p>
                            </CardFooter>
                        </Card>
                    </TabsContent> */}
                </Tabs>
            </motion.div>
            <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
                <AlertDialogContent className="bg-white dark:bg-gray-800 border-0 shadow-xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                            <AlertCircle className="h-5 w-5" />
                            Invalid Credentials
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-600 dark:text-gray-300">
                            The username or password you entered is incorrect. Please try again.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction
                            className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                            onClick={() => setShowErrorDialog(false)}
                        >
                            Try Again
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}