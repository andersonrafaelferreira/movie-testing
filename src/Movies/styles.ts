import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	margin: 20px;
`

export const Inputer = styled.input`
	border: 3px solid #86888a;
	background-color: #eeeeee;
	width: 680px;
	height: 36px;
	font-size: 18px;
  padding: 6px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9ead3;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
	transform: translateY(-7px);
  }
`

export const CardWrapper = styled.section`
	width: 90%;
	max-width: 1080px;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 20px;
`
	
export const Text = styled.div`
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 400;
  
  color: #222;
`  

export const Content = styled.div`
  margin: 10px;
`  

export const Image = styled.img`
	width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;

  overflow: hidden;
  position: relative;
`  
export const Title = styled.h2`
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 400;
  margin-bottom: 10px;
  color: #333;
`  

export const Mark = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: #333;		

  margin-left: auto;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #d9ead3;
  filter: brightness(90%);
`

export const Info = styled.div`
  display: flex;
  align-self: end;
  align-items: center;
`