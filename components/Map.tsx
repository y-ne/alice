"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!ref.current) return;

		const map = new maplibregl.Map({
			container: ref.current,
			style: "https://tiles.openfreemap.org/styles/positron",
			center: [110.3695, -7.7956],
			zoom: 11,
			minZoom: 10,
			maxZoom: 17,
			maxBounds: [
				[110.0, -8.2],
				[110.85, -7.5],
			],
		});

		return () => map.remove();
	}, []);

	return <div ref={ref} className="h-screen w-full" />;
}
