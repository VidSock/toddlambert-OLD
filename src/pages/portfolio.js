
import React from 'react'
import Layout from '../components/Layout'
import Install from '../components/Install'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/Gallery'
import Image from '../components/Image'
// import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
// import GalleryMenu from '../components/GalleryMenu'
import { FiZoomIn } from 'react-icons/fi'
// import PopSemi from '../components/PopSemi'

import styled from "styled-components"
const CustomBox = styled.div`

.intro:before{
	content: "Todd's Portfolio";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:350%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

.speech:after {
	content: '';
position: absolute;
top: 30%;
right: -18px;
width: 0;
height: 0;
	border: 60px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
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





`


const Portfolio = graphql`
  query Portfolio {
    allFile(filter: { relativeDirectory: { eq: "favorites" } }) {
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
  const data = useStaticQuery(Portfolio)
  return (
	  <CustomBox>
    <Layout>
    <Install/>
<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>

<div className="container">
<h3 className="logolink" style={{textAlign:'center',}}>
<span className="logofirst">todd</span> <span className="logocolor">portfolio</span>
</h3>

</div>


<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br />

My experience has taught me that good design is not created on a spur of the moment, nor does it come naturally . Good design is a thorough process of collaboration between multiple teams and the site visitors. Design is asking questions and identifying a problem.
</p>
<h5>- Todd Lambert</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" animateOnce={false} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><Image alt="Co-worker talks about Todd Lambert" filename="todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>
</ScrollAnimation>

 </div>

</section>




<section className="  intro section">
<div className="zoomer" style={{paddingTop:'0', display:'flex',alignItems:'center', justifyContent:'center',}}>
      <h4 style={{display:'flex', color:'#fff', fontSize:'100%', textAlign:'center', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'fixed', bottom:'50px', zIndex:'1', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
      </div>

      <div className="container" style={{background:'', padding:'2rem',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
</section>



<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>

<div className="container">
<h3 className="logolink" style={{textAlign:'center',}}>
<span className="logofirst">various</span> <span className="logocolor">hats worn</span>
</h3>
    
</div>

<div className="container">
<h3 className="logolink" style={{textAlign:'center',}}>
<span className="logofirst">portfolio</span> <span className="logocolor">spotlight</span>
</h3>
    
</div>

<div className="container">
<h3 className="logolink" style={{textAlign:'center',}}>
<span className="logofirst">list</span> <span className="logocolor">of clients</span>
</h3>
    
</div>



 
 
</section>


      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
