import styled from 'styled-components'

	const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	`
	const Gif = styled.img`
	width: 50%;
	height: 50%;
	`

const NotFound = () => {

	return (
		<Container>
			<h1>Page not found</h1>
			<Gif src="https://media.tenor.com/p_l2C1SX4bEAAAAj/confused-john.gif" />
		</Container>
	)
}

export default NotFound
