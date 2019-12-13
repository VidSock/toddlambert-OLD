
import React from 'react'
import Layout from '../../components/Layout'
import Install from '../../components/Install'
import { graphql, useStaticQuery } from 'gatsby'
import Image from '../../components/Image'
import Gallery from '../../components/Gallery'
import ScrollAnimation from 'react-animate-on-scroll'
// import GalleryMenu from '../../components/GalleryMenu'
// import { FiZoomIn } from 'react-icons/fi'
// import PopSemi from '../../components/PopSemi'

import styled from "styled-components"
const CustomBox = styled.div`

.intro:before{
	content: "Galleries: Popular Favorites";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:350%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}




@media (max-width: 48rem) {
.intro:before{font-size:200%;}
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
.gatsby-image-wrapper{transform: scale(1.25);}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/




@media (max-width: 48rem) {

.split{flex-direction:column !important; width:100% !important;}
.split div{width:100% !important}


.split div:first-child{order:2}
.split div:last-child{order:1}
.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:1}
.split.nowrap div:last-child{order:2}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}

.split.nowrap .speech:after {
position: absolute;
top: 50%;
right: -20px;
width: 0;
height: 0;
	border: 20px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

.intro:before{font-size:200%;}

}



`


const Galleries = graphql`
  query Galleries {
    allFile(filter: { relativeDirectory: { eq: "gallery1" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const Gal1Page = () => {
  const data = useStaticQuery(Galleries)
  return (
	  <CustomBox>
    <Layout>
    <Install/>

<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>
<div className="container">
<h3 className="logolink" style={{textAlign:'center',}}>
<span className="logofirst">todd</span> <span className="logocolor">photography</span>
</h3>

<p>Todd Lambert is a new breed of photographer who focuses on photographing remote locations such as graveyards and abandoned places at night. He thrives on the “butterflies” feeling you get when you’re somewhere that you’re not supposed to be. In many cases that is closer to the truth than you would think.</p>

<p>Todd is an adventurous spirit who seeks out exotic locations and unusual subject matter that is atypical to the normal landscape genre. He has excelled at finding and capturing beauty and his award winning portfolio shows that.</p>

<p>Todd has focused mostly on the western United States where his work represents 14 states so far.</p>
</div>


</section>
      
      

      

      
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={false} delay={10} animateOnce={true} animatePreScroll={true}>
      <div className="container" style={{background:'#111',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
      </ScrollAnimation>



<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>
<div className="container">
<h3 className="logolink" style={{textAlign:'center',}}>
<span className="logofirst">todd</span> <span className="logocolor">network</span>
</h3>
    
    </div>
    
    
    <div className="split " style={{display:'flex', flexWrap:'no-wrap', position:'relative',  width:'100%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={10} style={{width:'50%', zIndex:'1', margin:'0 0 1rem 0',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>
<a href="https://twilightscapes.com" target="_blank" rel="noopener" style={{textDecoration:'none', color:'inherit',}}>
<div style={{padding:'25px',}}><Image alt="Co-worker talks about Todd Lambert" filename="twilightscapes-button.jpg" /></div>
<p>
Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the Western States like you&apos;ve never seen them before.
</p>
<h5>Twilightscapes.com</h5>
</a>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" animateOnce={false} delay={10} style={{width:'50%', zIndex:'1', margin:'0 0 1rem 0',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>
<a href="https://urbanfetish.com" target="_blank" rel="noopener" style={{textDecoration:'none', color:'inherit',}}>
<div style={{padding:'25px',}}>
<Image alt="Co-worker talks about Todd Lambert" filename="urban-fetish-button.jpg" /></div>

<p>
Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. See places that you wouldn&apos;t dare go into, especially at night.
</p>
<h5>UrbanFetish.com</h5>
</a>
</div>
</ScrollAnimation>

 </div>
 
 
 
    </section>

      


      
      
      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
