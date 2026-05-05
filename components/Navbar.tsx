"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Navbar() {
	return (
		<>
			<header className="fixed top-0 inset-x-0 z-10 h-16 bg-background/70 backdrop-blur-md">
				<div className="flex h-full items-center gap-4 px-4">
					<Link href="/" className="font-semibold">
						Alice
					</Link>
					<div className="relative flex-1 max-w-md">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search location..."
							className="pl-9"
						/>
					</div>
				</div>
			</header>
			<div className="pointer-events-none fixed top-16 inset-x-0 z-10 h-8 bg-linear-to-b from-background/70 to-transparent" />
		</>
	);
}
