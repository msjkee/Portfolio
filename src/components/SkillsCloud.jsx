import { useEffect, useRef } from "react";

function SkillsCloud() {
    const containerRef = useRef(null);
    const instanceRef = useRef(null);

    useEffect(() => {
        if (typeof window.TagCloud === "undefined") {
            console.error("TagCloud is not loaded. Add the CDN script to public/index.html");
            return;
        }

        const labels = ["Java", "Dart", "Flutter", "Git", "React", "HTML", "CSS"];

        const icons = [
            "/images/java_icon.png",
            "/images/dart_icon.png",
            "/images/flutter_icon.png",
            "/images/git_icon.png",
            "/images/react_icon.png",
            "/images/html_icon.png",
            "/images/css_icon.png",
        ];

        const options = {
            radius: 200,
            maxSpeed: "fast",
            initSpeed: "normal",
            direction: 135,
            keep: true,
        };

        instanceRef.current = window.TagCloud(containerRef.current, labels, options);

        const items = containerRef.current.querySelectorAll(".tagcloud--item");
        items.forEach((el, i) => {
            const src = icons[i % icons.length];
            el.innerHTML = `<img src="${src}" alt="${labels[i % labels.length]}" width="80" height="80" />`;
            el.style.lineHeight = "0";
        });

        containerRef.current.querySelectorAll(".tagcloud--item img").forEach((img) => {
            img.style.pointerEvents = "none";
        });

        return () => {
            if (instanceRef.current && instanceRef.current.destroy) {
                instanceRef.current.destroy();
                instanceRef.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-[400px] h-[400px] flex items-center justify-center z-[10]"
        />
    );
}

export default SkillsCloud;
