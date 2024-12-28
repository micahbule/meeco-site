import Image from "next/image";

type CertificationCardProps = {
  name: string;
  since: Date;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
};

export const CertificationCard = ({
  name,
  since,
  imageAlt,
  imageUrl,
  tags,
}: CertificationCardProps) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(since);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="pt-3">
        <Image src={imageUrl} height={150} width={150} alt={imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Certified Since: {formattedDate}</p>
        <div className="card-actions justify-end">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
