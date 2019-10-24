import React, { Component } from 'react';
import { mergeClasses } from '@material-ui/styles';
import classes from '../../Resources/css/styles.module.css';
import ImageLightbox from '../utils/lightbox';

class ProdImg extends Component {
   state={
       lightbox:false,
       imagePos:0,
       lightBoxImages:[]
   }

   componentDidMount(){
       if(this.props.detail.images.length>0){
           let lightBoxImages=[];
           this.props.detail.images.forEach(item => {
               lightBoxImages.push(item.url)
           });
                 this.setState({
                     lightBoxImages
                 })
        }
    
   }
  renderCardImage=(images)=>{
       if(images.length>0){
           return images[0].url
       }else{
           return `/images/image_not_availble.png`
       }
  }
handleLightBox=(pos)=>{
if (this.state.lightBoxImages.length>0){
        this.setState({
            lightbox:true,
            imagePos:pos
        })
}
}

handlelightboxClose=()=>{
    this.setState({
        lightbox:false
    })
}

showThumbs=()=>(
    this.state.lightBoxImages.map((item,i)=>(
        i>0 ?
          <div
          key={i}
          onClick={()=>this.handleLightBox(i)}
          className={classes.thumb}
          style={{
              background:`url(${item})`
          }}         
>

          </div>:null
    ))
)
    render() {
    const {detail}= this.props;
        return (
            
            <div className={classes.product_image_container}>
                <div className={classes.main_pic}>
                <div
                style={{ background:`url(${this.renderCardImage(detail.images)})`}}
                onClick={()=>
                    this.handleLightBox(0)
                }
                >

                </div>

                </div>
                <div className={classes.main_thumbs}>
                   {this.showThumbs()}
                </div>
                {
                    this.state.lightbox ?
                    <ImageLightbox
                        id={detail.id}
                        images={this.state.lightBoxImages}
                        open={this.state.open}
                        pos={this.state.imagePos}
                        onClose={()=>this.handlelightboxClose()}
                    />
                    :null
                }
            </div>
        );
    }
}

export default ProdImg;