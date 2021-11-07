import React from "react";

import styled from "styled-components";

const MainUIGrid = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  grid-template-columns: 2fr 1fr;

  grid-template-areas: 
  "visual text";
`; 



export default function UI(){
    return <MainUIGrid>
        
    </MainUIGrid>
}