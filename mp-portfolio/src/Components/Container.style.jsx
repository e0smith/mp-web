import styled from "styled-components";
import img from "./Photos/Home2.jpeg"
import { createGlobalStyle } from "styled-components";

export const FontStyle = createGlobalStyle`
body {
    font-family: "Roboto", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif;
	font-weight: 300;
}
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #2d2d2d;
    overflow:auto;
`

export const HomeBackground = styled.div`
    border: none;
    background: url(${img}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const NameMark = styled.mark`
    font-family: 'Roboto', "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    font-weight: 400;
    color: rgb(155, 155, 155);
    background: none;
    letter-spacing: 0;
    margin-left: .5rem;
    margin-top: .5rem;
    position: sticky;
    z-index: 9999;
    display: inline-block;
`

// export const FormBox = styled.table`
//     box-sizing: border-box;
//     justify-content: center;
//     // margin: auto;
// `

export const SubBodyForm = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 30px;
    display: inline-block;
`
export const InputText = styled.input`
    width: 40rem;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
`
export const TextArea = styled.textarea`
    width: 40rem;
    height: 300px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
`

export const SubmitButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    text-align: center;
    position: relative;
`
export const InfoBox = styled.section`
    background-color: #ffff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    text-align: center;
    position: relative;
    text-color: black;
    height: 55rem;
    width: 50rem;
`

export const InfoHeader = styled.header`
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
    font-size:40px;
    background-color: #717D7E;
    color: white;
`

// export const H2Boarder = styled.h2`
//     border-top: 1px dashed #ddd;
//     border-bottom: 1px dashed #ddd;
// `

export const PolicyBox = styled.div`
    background-color: #ffff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    margin-bottom: 10rem;
    position: relative;
    text-color: black;
    height: 82rem;
    width: 60rem;
`
export const PolicyText = styled.div`
    padding: 15px;
`

export const GTitleBox = styled.div`
    width: 200px;
    height: 50px;
    overflow: hidden;
    position: relative;
    padding-left: 20%;
`

export const Gtitle = styled.h1`
    font-size: 20px;
    color: #ccc;
`
export const GPortfolio = styled.div`
    width: 100%;
    height: 100%;
    margin: 10px 0;
    position: relative;
`

export const GPTitleBox = styled.div`
    width: 100%;
    height: 60px;
    padding-left: 20%;
    padding-bottom: 120px
`

export const GPTitle = styled.h2`
    font-size: 14px;
    color: #ccc;
    font-weight: bold;
    width: 200px;
    padding: 15px 0 30px;
    border-top: 1px dotted #666;
    border-bottom: 1px dotted #666;
    position: relative;
    top: 20px;
`

export const GSection = styled.section`
    margain top: 10px;
`
export const PortfolioBox = styled.div`
    width: 100%;
    height: 160px;
    position: relative;
`
export const Hover = styled.div`
    &:hover {
        background-color: #444;
    }
`

export const PortfolioShow = styled.div`
    display: none
`

export const PhotoCardStyle = styled.div`

`