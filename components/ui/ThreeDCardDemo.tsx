"use client";

import Image from "next/image";
import React from "react";
import userImg from "../../app/assets/userImg.jpg";
import perImg from "../../app/assets/per.webp";
import { CardBody, CardContainer, CardItem } from "../shadcnUI/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody>
        <CardItem translateZ={50} className="w-full mt-4">
          <Image
            src={perImg}
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="selfImage"
            unoptimized
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
