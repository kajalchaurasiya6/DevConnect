import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { signupSchema, type SignupSchemaType } from "@/features/auth/types/auth.types";
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function ProfilePage() {
    const form = useForm<SignupSchemaType>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });
    return (
        <div className="w-full border-2 h-screen  rounded-md">
            <div className="flex justify-between w-full border-b p-4">
                <div className="flex flex-row gap-10  w-3/6">
                    <div className="rounded-full  w-10 h-10 ">
                        <UserCircleIcon className="w-16 h-16" />
                    </div>
                    <div className="flex flex-col">
                        <p>Kajal chaurasiya</p>
                        <p>chaurasiyak43@gmail.com</p>
                    </div>
                </div>
                <div>
                    <Button className="bg-[#4182F9]">Edit</Button>
                </div>
            </div>
            {/* profile editing form */}
            <div>
                <Form {...form}  >
                    <form className="flex flex-row gap-10 p-4 w-full"  >
                        <div className="flex flex-col w-1/2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name"  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/* <div className="w-full">
                            <Button
                                type="submit"
                                className="w-full py-2 bg-gradient-to-tr from-indigo-500 via-indigo-200-300 to-pink-500 text-white rounded-md hover:bg-blue-700 transition"
                            >
                                Sign Up
                            </Button>



                        </div> */}
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ProfilePage