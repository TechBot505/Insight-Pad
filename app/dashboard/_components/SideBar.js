import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { FileText, Layout, Rocket } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function SideBar() {
  return (
    <div className='shadow-md h-screen p-6'>
        <Image src={'/logo.svg'} width={170} height={120} alt='logo'/>
        <div className='mt-10'>
            <Button className='w-full'><FileText/> Upload PDF</Button>
            <div className='flex gap-2 items-center mt-4 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
                <Layout size={24} />
                <h2>Workspace</h2>
            </div>
            <div className='flex gap-2 items-center mt-1 p-3 rounded-lg cursor-pointer hover:bg-slate-100'>
                <Rocket size={24} />
                <h2>Upgrade</h2>
            </div>
        </div>
        <div className='absolute bottom-24 w-[80%] bg-gray-100 p-3 rounded-md'>
            <Progress value={50} className='mt-1' />
            <p className='text-sm mt-1'>2 out of 5 PDFs Uploaded</p>
            <p className='mt-2 text-gray-400 text-sm'>Upgrade to Upload more PDFs</p>
        </div>
    </div>
  )
}

export default SideBar;