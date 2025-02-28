'use client';

import { useEffect } from 'react';
import { useTheme } from "next-themes";

export default function CoupangAds() {
    // theme 설정이 변경될 때 마다, useEffect 내부의 함수 실행되게 하기 위해 선언
    const { theme } = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => {
            const coupangScript = document.createElement('script');
            coupangScript.src = 'https://ads-partners.coupang.com/g.js';
            coupangScript.async = true;
            coupangScript.id = 'delayed-coupang-script';
            document.head.appendChild(coupangScript);

            coupangScript.onload = () => {
                const coupangInitScript = document.createElement('script');
                coupangInitScript.id = 'delayed-coupang-init';
                coupangInitScript.textContent = `new PartnersCoupang.G({"id":697475,"trackingCode":"AF5641264","subId":null,"template":"carousel","width":"300","height":"330"});`;
                document.head.appendChild(coupangInitScript);
            };
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, [theme]);

    return null; // This component doesn't render any visible UI elements
}