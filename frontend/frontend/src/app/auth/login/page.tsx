"use client";

import OTPInput from '@/components/custom/OTPInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useCookies } from '@/hooks/useCookies';

export default function Login() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const cookies = useCookies();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (otp.join("").length !== 4) {
                toast({
                    description: 'Please enter a valid OTP',
                    variant: 'destructive'
                });
                return;
            }

            if ((!emailRef.current?.value && !phoneRef.current?.value)) {
                toast({
                    description: 'Please enter either email or phone number',
                    variant: 'destructive'
                });
                return;
            }

            setLoading(true);
            const bodyContent = Object.fromEntries(new FormData(e.currentTarget));
            bodyContent.otp = otp.join('');

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyContent)
            });
            const data = await response.json();
            setLoading(false);
            if (response.ok) {
                toast({
                    description: 'Login successful!',
                });

                // Remove all cookies
                cookies?.remove('token');
                cookies?.remove("adminToken");
                cookies?.remove("otToken");
                cookies?.remove("devId");

                cookies?.set('token', data.token, 15);
                router.push("/customer");
            } else {
                toast({
                    description: 'Error logging in! Please try again later.',
                    variant: 'destructive'
                });
            }
        } catch (error) {
            setLoading(false);
            console.log('Error logging in:', error);
            toast({
                description: 'Error logging in! Please try again later.',
                variant: 'destructive'
            });
        }
    };

    const sendOTP = async () => {
        try {
            if (!emailRef.current?.value && !phoneRef.current?.value) {
                toast({
                    description: 'Please enter either email or phone number',
                    variant: 'destructive'
                });
                return;
            }

            setLoading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailRef.current?.value })
            });
            const data = await response.json();
            setLoading(false);
            toast({
                description: data.message,
            });
        } catch (error) {
            setLoading(false);
            console.log('Error sending OTP:', error);
            toast({
                description: 'Error sending OTP! Please try again later.',
                variant: 'destructive'
            });
        }
    };

    return (
        <>
            <div className={cn('absolute inset-0 bg-black/80 z-50 cursor-wait', {
                'hidden': !loading,
                'grid place-content-center': loading
            })}>
                <AiOutlineLoading3Quarters className='animate-spin text-5xl text-primary' />
            </div>
            <form
                className='bg-white px-6 py-8 rounded-lg max-w-md w-full mx-auto flex flex-col gap-4'
               
            >
                <h1 className='heading-1 text-center mb-4'>This feature is available on UAT server.</h1>
                <h1 className='heading-1 text-center mb-4'>Thank You</h1>
                {/* <Button>Thank You</Button> */}
                <p className='text-center'> <Link href='/' className='text-primary underline'>Go Back</Link></p>
            </form>
        </>
    )
}
