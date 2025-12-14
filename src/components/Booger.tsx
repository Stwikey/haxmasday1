import Image from "next/image";

type BoogerClickProps = {
	onClick: () => void;
};

export default function BoogerClick({ onClick }: BoogerClickProps) {
	return (
		<button onClick={onClick}>
			<Image src="/booger.png" width={512} height={512} alt="Bogey" className="spinning"/>
		</button>
	)
}