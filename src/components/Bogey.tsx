import Image from "next/image";

type BogeyClickProps = {
	onClick: () => void;
};

export default function BogeyClick({ onClick }: BogeyClickProps) {
	return (
		<button onClick={onClick}>
			<Image src="/bogey.png" width={512} height={512} alt="Bogey" className="spinning"/>
		</button>
	)
}