import { useEffect, useState } from "react";
import useDebounce from "./use-debounce";

const useElementResize = ({ el, defaultWidth, setWidth }: {el: HTMLElement | null, defaultWidth: number, setWidth?: (width: number) => void;}) => {
	const [elementWidth, setElementWidth] = useState(el?.clientWidth);

	const handleElementResize = useDebounce(() => {
		setElementWidth(el?.clientWidth)
        setWidth?.(el?.clientWidth||defaultWidth)
	}, 200);

	useEffect(() => {
		el?.addEventListener("resize", handleElementResize);

		return () => el?.removeEventListener("resize", handleElementResize);
	}, [el]);

    return {
        width: elementWidth || defaultWidth
    }
};

export default useElementResize;