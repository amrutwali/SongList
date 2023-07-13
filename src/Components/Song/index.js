const Song = ({
	title,
	artists,
	rating,
	url = 'https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg',
}) => {
	const weightedAverage = (rating) => {
		const final =
			(rating[1] * 1 +
				rating[2] * 2 +
				rating[3] * 3 +
				rating[4] * 4 +
				rating[5] * 5) /
			(rating[1] + rating[2] + rating[3] + rating[4] + rating[5]);
		return final;
	};

	return (
		<div className="card">
			{rating[1] === 0 &&
			rating[2] === 0 &&
			rating[3] === 0 &&
			rating[4] === 0 &&
			rating[5] === 0 ? (
				<></>
			) : (
				<div className="rating">
					<div className="star">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="240"
							height="240"
							viewBox="0 0 240 240"
						>
							<path
								fill=""
								d="m48,234 73-226 73,226-192-140h238z"
							/>
						</svg>
					</div>
					{/* <img src={starlink} /> */}
					<span>{weightedAverage(rating).toFixed(1)}</span>
				</div>
			)}
			<img src={url} />
			<h3>{title}</h3>
			<p>
				{artists.map((artist, index) => {
					return index !== artists.length - 1 ? `${artist}, ` : `${artist}`;
				})}
			</p>
		</div>
	);
};

export default Song;
