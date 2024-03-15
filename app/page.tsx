'use client'
import Image from "next/image";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React from 'react';
import "./globals.css";
import Link from 'next/link'

export default function page() {
  return (
<div key="1" className="flex justify-center items-center min-h-screen background-image">   <div className="flex flex-col items-center">
        <Card className="rounded-lg border border-gray-100 b-white  dark:border-white dark:bg-gray-150 dark:text-black w-[800px] shadow-lg">
          <CardHeader>

            <div className="flex flex-col items-center mt-4">
              
              <Avatar className="avatar-image">
                <AvatarImage alt="Profile picture" src="https://i.ibb.co/w0585Fy/63979f47790f05.78935161.jpg" />
                <AvatarFallback className="text-xl ">KS</AvatarFallback>
              </Avatar>
              <h2 className="mt-2 font-semibold text-lg">@Kayjayohpcs</h2>
              <a className="text-sm text-gray-600 mt-1">
                PCs Given Away: 11
              </a>
              <a className="text-sm text-gray-600 mt-1">
                Are you next?!
              </a>
            </div>
          </CardHeader>
          <div className="flex space-x-4 mb-4 justify-center ">
  <Button 
    className="w-1/2 max-w-[110px] dark:bg-stone-100 dark:text-black dark:hover:bg-neutral-200 dark:hover:text-black"  
    variant="secondary" onClick={() => navigator.clipboard.writeText('kayjayohpcs@gmail.com')}
  >
    <MailIcon className="h-5 w-5 mr-2" />
    Email
  </Button>

            <Button className="w-1/2 max-w-[110px] dark:bg-stone-100 dark:text-black dark:hover:bg-neutral-200 dark:hover:text-black " variant="secondary"
            onClick={() => navigator.clipboard.writeText('kayjayoh')}
            > 
           
            <DiscIcon className="h-5 w-5 mr-2" />
            
              Discord 
            </Button>
          </div>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center justify-between col-span-2 border border-gray-200  p-2 rounded-lg shadow-lg ">
                <TikokIcon className="h-6 w-6" />
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold">Tiktok</h3>
                  <p className="text-sm text-gray-500">tiktok.com/@kayjayohpcs</p>
                </div>
                <Link href="https://www.tiktok.com/@kayjayohpcs"><Button variant="ghost" className="dark:hover:bg-neutral-100 dark:hover:text-black">View</Button></Link>
              </div>
              <div className="flex items-center justify-between col-span-2 border border-gray-200 p-2 rounded-lg shadow-lg ">
                <InstagramIcon className="h-6 w-6" />
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold">Instaaaaa</h3>
                  <p className="text-sm text-gray-500">instagram.com/kayjayohpcs</p>
                </div>
                <Link href="https://instagram.com/kayjayohpcs"><Button variant="ghost" className="dark:hover:bg-neutral-100 dark:hover:text-black">View</Button></Link>
              </div>
              <div className="flex items-center justify-between col-span-2 border border-gray-200 p-2 rounded-lg shadow-lg ">
                <YoutubeIcon className="h-6 w-6" />
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold">YouTube</h3>
                  <p className="text-sm text-gray-500">youtube.com/@Kayjayohpcs</p>
                </div>
                <Link href="https://youtube.com/@Kayjayohpcs"><Button variant="ghost" className="dark:hover:bg-neutral-100 dark:hover:text-black">View</Button></Link>
              </div>
              
              <div className="flex items-center justify-between col-span-2 border border-gray-200 p-2 rounded-lg shadow-lg ">
                <KeyIcon className="h-6 w-6" />
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold">Discord for PC Giveaway!!!!</h3>
                  <p className="text-sm text-gray-500">discord.gg/kjo</p>
                </div>
                <Link href="https://discord.com/invite/kjo"><Button variant="ghost" className="dark:hover:bg-neutral-100 dark:hover:text-black">View</Button></Link>
              </div>
              <div className="flex items-center justify-between col-span-2 border border-gray-200 p-2 rounded-lg shadow-lg ">
                <HardDriveIcon className="h-6 w-6" />
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold">Crucial T705 SSD</h3>
                  <p className="text-sm text-gray-500">crucial.gg/kayjayohpcs</p>
                </div>
                <Link href="https://crucial.gg/kayjayohpcs"><Button variant="ghost" className="dark:hover:bg-neutral-100 dark:hover:text-black">Shop</Button></Link>
              </div>
               <div className="flex items-center justify-between col-span-2 border border-gray-200 p-2 rounded-lg shadow-lg "> 
                <ComputerIcon className="h-6 w-6" />
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold">NZXT Prebuilt!!!</h3>
                  <a className="text-sm text-gray-500">
                    nzxt.com
                  </a>
                </div> 
                <Link href="https://nzxt.com/?utm_source=kayjayohpcs"><Button variant="ghost" className="dark:hover:bg-neutral-100 dark:hover:text-black">Shop</Button></Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center mt-4" />
        </Card>
      </div>
    </div>
  )
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function DiscIcon(props) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"       fill="none"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
  ><path fill="currentColor" d="M8.52 13.846c-1.04 0-1.888-.945-1.888-2.101c0-1.157.827-2.102 1.889-2.102c1.05 0 1.91.945 1.889 2.102c0 1.156-.839 2.1-1.89 2.1m6.974 0c-1.04 0-1.89-.945-1.89-2.101c0-1.157.829-2.102 1.89-2.102c1.05 0 1.91.945 1.89 2.102c0 1.156-.829 2.1-1.89 2.1m-5.369-9.523l-.308-.563l-.634.106a16.354 16.354 0 0 0-4.158 1.28l-.228.105l-.142.21c-2.613 3.853-3.33 7.648-2.975 11.375l.039.407l.33.24a16.91 16.91 0 0 0 5.078 2.543l.79.242L9.03 17.55c1.91.472 4.03.472 5.939 0l1.107 2.717l.79-.242a16.82 16.82 0 0 0 5.08-2.545l.327-.238l.04-.402c.436-4.32-.697-8.083-2.958-11.384l-.142-.208l-.228-.104a16.575 16.575 0 0 0-4.154-1.28l-.618-.103l-.314.542c-.088.15-.177.32-.263.493a15.878 15.878 0 0 0-3.263 0c-.085-.17-.17-.333-.248-.474M6.715 16.61c.197.114.405.226.61.328l-.449 1.096a15.018 15.018 0 0 1-3.428-1.778c-.225-3.138.413-6.305 2.564-9.57a14.551 14.551 0 0 1 2.824-.913c.06.125.116.248.162.356l.273.643l.692-.101a14.108 14.108 0 0 1 4.09 0l.69.1l.272-.642c.047-.112.102-.234.16-.356c.977.21 1.923.52 2.828.915c1.875 2.82 2.821 5.966 2.546 9.567a14.901 14.901 0 0 1-3.43 1.779l-.445-1.095c.206-.102.414-.214.613-.329c.49-.282 1.017-.634 1.353-.97l-1.28-1.28c-.163.164-.523.42-.977.682c-.444.256-.885.463-1.167.556c-2.003.663-4.428.663-6.432 0c-.281-.093-.722-.3-1.166-.556c-.454-.261-.814-.518-.978-.682l-1.28 1.28c.337.336.864.688 1.354.97"/></svg>  )
}


function InstagramIcon(props) {
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

function TikokIcon(props) {
  return (
<svg fill="#000000" width="25px" height="25px" viewBox="0 0 268 250" id="Flat" xmlns="http://www.w3.org/2000/svg">
  <path d="M224,124a95.56424,95.56424,0,0,1-56.00043-18.01709L168,156A68,68,0,1,1,88,89.05544l-.00061,41.63941A28.0028,28.0028,0,1,0,128,156V28h40a56,56,0,0,0,56,56Z" opacity="0"/>
  <path d="M224,76a48.05436,48.05436,0,0,1-48-48,7.99977,7.99977,0,0,0-8-8H128a7.99977,7.99977,0,0,0-8,8V156a20,20,0,1,1-28.56738-18.0791,7.99971,7.99971,0,0,0,4.56689-7.22607L96,89.05569a7.99952,7.99952,0,0,0-9.40234-7.876A76.00518,76.00518,0,1,0,176,156l-.00049-35.70752A103.32406,103.32406,0,0,0,224,132a7.99977,7.99977,0,0,0,8-8V84A7.99977,7.99977,0,0,0,224,76Zm-8,39.64356a87.21519,87.21519,0,0,1-43.32861-16.15479,7.99982,7.99982,0,0,0-12.67188,6.49414L160,156a60,60,0,1,1-80-56.6001l-.00049,26.66846A35.99955,35.99955,0,1,0,136,156V36h24.49756A64.13944,64.13944,0,0,0,216,91.50246Z"/>
</svg>
  )
}

function YoutubeIcon(props) {
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


function KeyIcon(props) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"       fill="none"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
  ><path fill="currentColor" d="M8.52 13.846c-1.04 0-1.888-.945-1.888-2.101c0-1.157.827-2.102 1.889-2.102c1.05 0 1.91.945 1.889 2.102c0 1.156-.839 2.1-1.89 2.1m6.974 0c-1.04 0-1.89-.945-1.89-2.101c0-1.157.829-2.102 1.89-2.102c1.05 0 1.91.945 1.89 2.102c0 1.156-.829 2.1-1.89 2.1m-5.369-9.523l-.308-.563l-.634.106a16.354 16.354 0 0 0-4.158 1.28l-.228.105l-.142.21c-2.613 3.853-3.33 7.648-2.975 11.375l.039.407l.33.24a16.91 16.91 0 0 0 5.078 2.543l.79.242L9.03 17.55c1.91.472 4.03.472 5.939 0l1.107 2.717l.79-.242a16.82 16.82 0 0 0 5.08-2.545l.327-.238l.04-.402c.436-4.32-.697-8.083-2.958-11.384l-.142-.208l-.228-.104a16.575 16.575 0 0 0-4.154-1.28l-.618-.103l-.314.542c-.088.15-.177.32-.263.493a15.878 15.878 0 0 0-3.263 0c-.085-.17-.17-.333-.248-.474M6.715 16.61c.197.114.405.226.61.328l-.449 1.096a15.018 15.018 0 0 1-3.428-1.778c-.225-3.138.413-6.305 2.564-9.57a14.551 14.551 0 0 1 2.824-.913c.06.125.116.248.162.356l.273.643l.692-.101a14.108 14.108 0 0 1 4.09 0l.69.1l.272-.642c.047-.112.102-.234.16-.356c.977.21 1.923.52 2.828.915c1.875 2.82 2.821 5.966 2.546 9.567a14.901 14.901 0 0 1-3.43 1.779l-.445-1.095c.206-.102.414-.214.613-.329c.49-.282 1.017-.634 1.353-.97l-1.28-1.28c-.163.164-.523.42-.977.682c-.444.256-.885.463-1.167.556c-2.003.663-4.428.663-6.432 0c-.281-.093-.722-.3-1.166-.556c-.454-.261-.814-.518-.978-.682l-1.28 1.28c.337.336.864.688 1.354.97"/></svg>
  )
}


function HardDriveIcon(props) {
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
      <line x1="22" x2="2" y1="12" y2="12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <line x1="6" x2="6.01" y1="16" y2="16" />
      <line x1="10" x2="10.01" y1="16" y2="16" />
    </svg>
  )
}


function ComputerIcon(props) {
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
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}
