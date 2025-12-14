import Image from "next/image";

type BoogsClickProps = {
	onClick: () => void;
};

export default function BoogsClick({ onClick }: BoogsClickProps) {
	return (
		<button onClick={onClick}>
			<Image src="/boogs.png" width={512} height={512} alt="Bogey" className="spinning"/>
		</button>
	)
}