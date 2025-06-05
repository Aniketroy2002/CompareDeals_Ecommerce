"use client"

import Link from "next/link"
import { SearchBar } from "./search-bar"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CompareDeals
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex md:flex-1 md:justify-center md:px-4">
          <SearchBar />
        </div>
      </div>

      <div className="md:hidden border-t p-2">
        <SearchBar />
      </div>
    </header>
  )
}
