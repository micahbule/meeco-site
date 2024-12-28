import { CertificationCard } from "./certification-card";

export default function Page() {
  return (
    <div className="p-5 bg-base-200 h-[calc(100vh-76px)] max-w-full">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <div className="flex justify-around pt-5">
        <CertificationCard
          name="NodeJS Services Developer"
          since={new Date("2024-10-10")}
          imageUrl="https://images.credly.com/size/680x680/images/3c44b901-a2bd-41e7-8a10-24cba9ddd85d/Training_Badges_Master_Node-ServDev.png"
          imageAlt="JSNSD"
          tags={["NodeJS", "Javascript"]}
          certificationUrl="https://www.credly.com/badges/dab49916-d4c1-4958-b689-98ac9a841f84/public_url"
        />
        <CertificationCard
          name="AWS Certified Solutions Architect - Associate"
          since={new Date("2023-10-27")}
          imageUrl="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
          imageAlt="AWSCSAA"
          tags={["AWS", "Cloud"]}
          certificationUrl="https://www.credly.com/badges/4c06775d-7853-4413-993b-15a51d73b550/public_url"
        />
        <CertificationCard
          name="Professional Scrum Master I"
          since={new Date("2023-07-18")}
          imageUrl="https://images.credly.com/size/680x680/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png"
          imageAlt="PSM1"
          tags={["Agile", "Scrum"]}
          certificationUrl="https://www.credly.com/badges/07f49ef6-65b8-4687-9b14-f04857c8e572/public_url"
        />
      </div>
    </div>
  );
}
