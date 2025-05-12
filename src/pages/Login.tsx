import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/useAuthStore';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { login,authUser } = useAuthStore();
    const submit = async (e:any) => {
        e.preventDefault();
        await login(formData);
    }

    return (
        <div>
            <Card className="w-[430px] mr-auto ml-auto mt-8">
                    <CardHeader>
                        <CardTitle>Fetch Account</CardTitle>
                        <CardDescription>
                            Fetch details of your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Email ID</Label>
                                    <Input
                                        placeholder="Enter Your Email ID"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        // ref={inputRef}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        placeholder="Enter Your Password"
                                        type="password"
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                </CardContent>
                    <CardFooter className="flex justify-center"></CardFooter>
            </Card>
            {authUser && (
                <Card className="">
                <CardHeader>
                    <CardTitle>Student Found</CardTitle>
                    <CardDescription>
                        Fetched details of student from the Database.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center">
                        <div className="flex flex-col space-y-1.5">
                            <p className="text-lg">
                                Full Name : <b>{authUser.firstName} {' '} { authUser.lastName}</b>
                            </p>
                            <p className="text-lg">
                                Last Login : <b>{authUser.lastLogin}</b>
                            </p>
                            <p className="text-lg">
                                Account ID : <b>{authUser.accountId}</b>
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            )}
        </div>
    )
}

export default Login