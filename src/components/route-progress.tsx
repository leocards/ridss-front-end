"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import NProgress from "nprogress";

NProgress.configure({
	minimum: 0.3,
	easing: "ease",
	speed: 500,
	showSpinner: false,
});

export default function RouteProgress() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		// Complete progress when route changes
		NProgress.done();
	}, [pathname, searchParams]);

	useEffect(() => {
		// Create wrapper functions for router methods
		const originalPush = router.push;
		const originalReplace = router.replace;
		const originalBack = router.back;
		const originalForward = router.forward;

		// Override router methods to start progress
		router.push = (...args: Parameters<typeof originalPush>) => {
			NProgress.start();
			return originalPush(...args);
		};

		router.replace = (...args: Parameters<typeof originalReplace>) => {
			NProgress.start();
			return originalReplace(...args);
		};

		router.back = () => {
			NProgress.start();
			return originalBack();
		};

		router.forward = () => {
			NProgress.start();
			return originalForward();
		};

		// Handle Link component clicks
		const handleLinkClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const link = target.closest("a");
			
			if (link?.href && !link.target) {
				try {
					const url = new URL(link.href);
					const currentUrl = new URL(window.location.href);
					
					// Check if it's an internal navigation (same origin, different path/search)
					if (
						url.origin === currentUrl.origin &&
						(url.pathname !== currentUrl.pathname || url.search !== currentUrl.search)
					) {
						// Don't start progress if it's the same page with just hash change
						if (url.pathname === currentUrl.pathname && 
							url.search === currentUrl.search && 
							url.hash !== currentUrl.hash) {
							return;
						}
						
						NProgress.start();
					}
				} catch (error) {
					// Invalid URL, ignore
					console.warn("Invalid URL in link:", link.href);
				}
			}
		};

		// Handle browser back/forward buttons
		const handlePopState = () => {
			NProgress.start();
		};

		// Add event listeners
		document.addEventListener("click", handleLinkClick);
		window.addEventListener("popstate", handlePopState);

		return () => {
			// Restore original methods
			router.push = originalPush;
			router.replace = originalReplace;
			router.back = originalBack;
			router.forward = originalForward;
			
			// Remove event listeners
			document.removeEventListener("click", handleLinkClick);
			window.removeEventListener("popstate", handlePopState);
		};
	}, [router]);

	return null;
}