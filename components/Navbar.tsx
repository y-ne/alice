"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Navbar() {
	return (
		<header className="fixed top-0 left-0 right-0 z-10 border-b border-border/40 bg-background/60 backdrop-blur-md">
			<div className="flex h-14 items-center gap-4 px-4">
				<Link href="/" className="font-semibold tracking-tight">
					Alice
				</Link>

				<div className="relative flex-1 max-w-md">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search location..."
						className="pl-9 bg-background/40"
					/>
				</div>
			</div>
		</header>
	);
}
