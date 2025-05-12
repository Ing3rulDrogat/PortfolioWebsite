"use client";

import React from "react";
import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

function WorkAndEducation() {
  const webhook = process.env.NEXT_PUBLIC_WEBHOOK_URL;
  const createN8NChat = () => {
    createChat({
      webhookUrl: webhook,
    });
  };
  return (
    <div className="w-screen h-screen">
      <p className="animate-wiggle">ff</p>
      <button
        type="button"
        // onClick={createN8NChat}
        className="z-10 relative px-4 py-2 mx-5 lg:h-1/2 h-full bg-teal-950 text-white rounded-lg hover:bg-gradient-to-t hover:from-teal-950 hover:to-gray-400 transition cursor-pointer"
      >
        Hi
      </button>
    </div>
  );
}

export default WorkAndEducation;
