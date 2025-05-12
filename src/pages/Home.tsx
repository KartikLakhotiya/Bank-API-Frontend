import { useAuthStore } from '@/store/useAuthStore'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


const Home = () => {
    const { authUser } = useAuthStore();
  return (
      <div>
          <Card className="w-[430px] mr-auto ml-auto mt-8">
                <CardHeader>
                    <CardTitle>Account Logged in</CardTitle>
                    <CardDescription>
                        Fetched details of your account.
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
    </div>
  )
}

export default Home