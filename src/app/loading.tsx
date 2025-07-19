"use client";
import LoadingScreen from "@/components/LoadingScreen";

export default function Loading() {
  // This file is only for suspense fallback, so just show the video
  return <LoadingScreen onFinish={() => {}} />;
}
