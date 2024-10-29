'use client'
import React from 'react';
import "./globals.css";
import Image from "next/image";

export default function Navbar () {
    return (
        <nav className="bg-background dark:bg-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image src="https://thumbs.dreamstime.com/b/chatbot-robot-user-icons-chat-bot-robot-user-icons-circle-set-elements-design-online-support-service-dialogue-228780421.jpg" alt="botorperson"/>
                        </div>
                    </div>
                </div>  
            </div>
        </nav>
    );
}