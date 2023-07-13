import React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
// Data
import data from '../../assets/data';
import { useSongsFetch } from '../../Hooks/useSongsFetch';

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
});

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

const parseDate = (date) => {
	return date.slice(0, 10);
};

const SongListComponent = () => {
	const { state, loading, error } = useSongsFetch();

	return (
		<>
			<Grid
				container
				mt={1}
				sx={{ flexGrow: 1 }}
				direction="column"
			>
				<Divider
					sx={{
						mt: 1,
					}}
				>
					<Typography
						variant="h4"
						color="primary"
					>
						Song List
					</Typography>
				</Divider>

				{console.log(state)}
				{!loading &&
					state.songs.map((song) => (
						<Grid
							item
							sx={{
								p: 3,
								pb: 0,
								maxWidth: 800,
								margin: 0,
							}}
						>
							<Paper
								elevation={4}
								sx={{
									p: 5,
									margin: 0,
									width: 'inherit',
									backgroundColor: (theme) =>
										theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
									borderRadius: 5,
								}}
							>
								<Grid
									container
									spacing={5}
								>
									<Grid item>
										<ButtonBase sx={{ width: 128, height: 128 }}>
											<Img
												alt="complex"
												src={song.url}
												sx={{ borderRadius: 4 }}
											/>
										</ButtonBase>
									</Grid>
									<Grid
										item
										xs={12}
										sm
										container
									>
										<Grid
											item
											xs
											container
											direction="column"
											spacing={2}
										>
											<Grid
												item
												xs
											>
												<Typography
													gutterBottom
													variant="h6"
													component="div"
													color="primary"
													m={0}
												>
													{song.title}
												</Typography>
												<Typography
													variant="body1"
													m={0}
													gutterBottom
												>
													{song.artist.map((rank, i, name) => {
														if (name.length === i + 1) return `${name}`;
														else return name.length;
													})}
												</Typography>
												<Typography
													mt={6}
													variant="body2"
													color="text.secondary"
												>
													Genre: {song.genre.list[song.genre.set]}
												</Typography>
												<Typography
													sx={{ cursor: 'pointer' }}
													variant="body2"
													color="secondary"
												>
													{parseDate(song.date)}
												</Typography>
											</Grid>
										</Grid>
										{song.rating[1] === 0 &&
										song.rating[2] === 0 &&
										song.rating[3] === 0 &&
										song.rating[4] === 0 &&
										song.rating[5] === 0 ? (
											<Typography variant="body1">No ratings yet</Typography>
										) : (
											<Grid
												item
												justifyContent="flex-end"
											>
												<Rating
													name="half-rating-read"
													value={weightedAverage(song.rating).toFixed(1)}
													precision={0.1}
													readOnly
												/>
												<Typography
													display="flex"
													justifyContent="flex-end"
													sx={{ fontWeight: 800 }}
													color="text.secondary"
												>
													{weightedAverage(song.rating).toFixed(1)}
												</Typography>
											</Grid>
										)}
									</Grid>
								</Grid>
							</Paper>
						</Grid>
					))}
			</Grid>
		</>
	);
};
export default SongListComponent;
