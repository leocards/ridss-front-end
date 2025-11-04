import { useEffect, useState } from "react";
import useThrottle from "./use-throttle";
import useDebounce from "./use-debounce";

const useWindowSize = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleWindowResize = useThrottle(() => {
		setWindowWidth(window.innerWidth)
	}, 100);

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

    return {
        width: windowWidth
    }
};

const useElementResize = ({ el, defaultWidth }: {el: HTMLElement | null, defaultWidth: number}) => {
	const [elementWidth, setElementWidth] = useState(el?.clientWidth);

	const handleElementResize = useDebounce(() => {
		setElementWidth(el?.clientWidth)
	}, 400);

	useEffect(() => {
		el?.addEventListener("resize", handleElementResize);

		return () => el?.removeEventListener("resize", handleElementResize);
	}, [el]);

    return {
        width: elementWidth || defaultWidth
    }
};

export {
    useElementResize
}

export default useWindowSize
