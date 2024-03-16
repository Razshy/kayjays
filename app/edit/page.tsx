import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from 'react';
import "../globals.css";
import Link from 'next/link'

export default function Component() {
       return (    <div className="relative mx-auto mt-10 max-w-lg px-4 sm:w-full rounded-lg bg-white p-6 shadow-lg">
       <div className="flex flex-col items-center space-y-4">
         <Avatar>
           <AvatarImage alt="Profile picture" src="/placeholder.svg?height=100&width=100" />
           <AvatarFallback>JP</AvatarFallback>
         </Avatar>
         <h1 className="text-xl font-semibold">@Kayjayohpcs</h1>
         <div className="flex items-center space-x-2">
           <Button variant="outline">Edit Profile</Button>
         </div>
         <div className="flex items-center space-x-2">
           <Button className="bg-green-500 text-white" variant="secondary">
             <PlusIcon className="mr-2 h-5 w-5" />
             Add New Link
           </Button>
         </div>
       </div>
       <div className="mt-6 grid grid-cols-1 gap-4">
         <div className="flex flex-col space-y-4">
           <div className="flex items-center space-x-2">
             <InstagramIcon className="h-5 w-5" />
             <Input placeholder="Icon Name (e.g., instagram)" />
             <Input placeholder="Link URL" />
             <Input placeholder="Display Name" />
             <Input placeholder="Button Text (e.g., View, Shop)" />
             <Button variant="outline">Update</Button>
           </div>
           <div className="flex items-center space-x-2">
             <YoutubeIcon className="h-5 w-5" />
             <Input placeholder="Icon Name (e.g., youtube)" />
             <Input placeholder="Link URL" />
             <Input placeholder="Display Name" />
             <Input placeholder="Button Text (e.g., View, Shop)" />
             <Button variant="outline">Update</Button>
           </div>
           <div className="flex items-center space-x-2">
             <DiscIcon className="h-5 w-5" />
             <Input placeholder="Icon Name (e.g., discord)" />
             <Input placeholder="Link URL" />
             <Input placeholder="Display Name" />
             <Input placeholder="Button Text (e.g., Join, Visit)" />
             <Button variant="outline">Update</Button>
           </div>
           <div className="flex items-center space-x-2">
             <ShoppingBagIcon className="h-5 w-5" />
             <Input placeholder="Icon Name (e.g., shopping-bag)" />
             <Input placeholder="Link URL" />
             <Input placeholder="Display Name" />
             <Input placeholder="Button Text (e.g., Buy Now, Shop)" />
             <Button variant="outline">Update</Button>
           </div>
         </div>
       </div>
       <div className="mt-8 flex justify-end space-x-4">
         <Button className="bg-purple-500 text-white" variant="secondary">
           <EyeIcon className="mr-2 h-5 w-5" />
           View Insights
         </Button>
       </div>
     </div>
   )
 }
 
 
 function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <path d="M5 12h14" />
       <path d="M12 5v14" />
     </svg>
   )
 }
 
 
 function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
     </svg>
   )
 }
 
 
 function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
       <path d="m10 15 5-3-5-3z" />
     </svg>
   )
 }
 
 
 function DiscIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <circle cx="12" cy="12" r="10" />
       <circle cx="12" cy="12" r="2" />
     </svg>
   )
 }
 
 
 function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
       <path d="M3 6h18" />
       <path d="M16 10a4 4 0 0 1-8 0" />
     </svg>
   )
 }
 
 
 function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
       <circle cx="12" cy="12" r="3" />
     </svg>
   )
 }
 