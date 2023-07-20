'use client'

import { useChat } from 'ai/react'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from './ui/scroll-area';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Chat Ai</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className='h-[640px] w-full pr-4'>
          {messages?.map(message => {
            return (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>MF</AvatarFallback>
                    <AvatarImage src="https://github.com/Mraimundo.png"></AvatarImage>
                  </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                    <AvatarImage src="https://github.com/Mraimundo.png"></AvatarImage>
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Usuario' : 'Ai'}
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter >
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}/>
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}