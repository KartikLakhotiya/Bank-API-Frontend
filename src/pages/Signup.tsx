import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signup() {

    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const { toast } = useToast();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };

    const submit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/create', userData)
            console.log("Response From API : ", response.data);
            if (response.status === 201) {
                toast({
                    title: "Created Account.",
                    description: "User account created successfully.",
                    variant: "success"
                })
                navigate('/');

            }
            else {
                toast({
                    title: "Uh Ohh Error.",
                    description: "Something Went wrong please retry.",
                    variant: "destructive"
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <h1 className="text-4xl font-semibold mb-1">Fortis Bank</h1>
            <Card className="w-[450px]">
                <CardHeader>
                    <CardTitle className="text-2xl">Create an account to continue.</CardTitle>
                    <CardDescription>Enter into a new world of banking.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Firstname</Label>
                                <Input id="firstName" name="firstName" onChange={handleChange} placeholder="Enter your Firstname" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Lastname</Label>
                                <Input id="lastName" name="lastName" onChange={handleChange} placeholder="Enter your Lastname" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Email</Label>
                                <Input id="email" name="email" onChange={handleChange} placeholder="Enter your Email" />
                            </div>
                            <div className="flex flex-col space-y-1.5 relative">
                                <Label htmlFor="password">Password</Label>
                                <div className="flex">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your Password"
                                        name="password" onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="ml-2"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={submit}>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
