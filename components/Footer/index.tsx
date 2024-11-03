import { Img } from "../Img"
import { Text } from "../Text";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col py-[46px] md:py-5 bg-white`}>
      <div className="container-xs flex flex-col items-start gap-4 md:px-5 lg:px-4">
        
        {/* Bagian Logo */}
        <div className="flex flex-col items-start gap-1">
          <img
            src="images/Logo.svg"
            alt="Brand Image"
            className="h-[18px] sm:h-[24px] md:h-[32px] object-contain ml-8 lg:ml-15"
          />
        </div>

        {/* Bagian Informasi Kontak */}
        <div className="flex flex-col items-start gap-1 ml-8 lg:ml-15">
          <Text as="p" className="text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-light text-primary">
            WhatsApp : +62 859 9999 999
          </Text>
          <Text as="p" className="text-[11px] xs: sm:text-[14px] md:text-[16px] lg:text-[18px] font-light text-primary">
            Email : hello@com
          </Text>
          <Text as="p" className="text-[11px] xs: sm:text-[14px] md:text-[16px] lg:text-[18px] font-light text-primary">
            Address : Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345
          </Text>
        </div>
        
      </div>

      {/* Bagian Copyright */}
      <div className="flex flex-col items-center justify-center mt-8">
        <Text as="p" className="text-[8px] sm:text-[12px] lg:text-[14px] font-light text-primary">
          All rights reserved{" "}
        </Text>
        <Text as="p" className="text-[8px] sm:text-[12px] lg:text-[14px] font-light text-primary">
          Copyright 2024 By Mofier
        </Text>
      </div>
    </footer>
  );
}
