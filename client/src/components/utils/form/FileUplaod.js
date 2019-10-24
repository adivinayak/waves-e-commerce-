import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from '../../../Resources/css/styles.module.css';
import axios from 'axios';

class FileUpload extends Component {
    constructor(){
        super();
        this.state={
            uploadedFiles:[],
            uploading:false
        }
    }
    
static getDerivedStateFromProps(props,state){
    if(props.reset){
        return state={
            uploadedFiles:[]
        }
    }
}

    onDrop=(files)=>{
           this.setState({
               uploading:true
           })
           let formData = new FormData();
           const config={
               header:{'content-type':'multipart/form-data'}
           }
     formData.append("file",files[0])

     axios.post('/api/users/uploadimage',formData,config).then(response=>{
              this.setState({
                  uploading:false,
                  uploadedFiles:[
                    ...this.state.uploadedFiles,
                    response.data
                  ]
                 
              },()=>{
                  this.props.imagesHandler(this.state.uploadedFiles)
              })
     });
    }

onRemove=(id)=>{
axios.get(`/api/users/removeimage?public_id=${id}`).then(
    response=>{
       let images= this.state.uploadedFiles.filter(item=>{
                       return item.public_id !== id;
        });
        this.setState({
            uploadedFiles:images
        },()=>{
            this.props.imagesHandler(images)
        })
    }
)
           
}

    showUploadedImages=()=>(
             this.state.uploadedFiles.map(item=>(
                 <div className={classes.dropzone_box}
                    key={item.public_id}
                    onClick={()=>this.onRemove(item.public_id)}
                 >
                   <div
                className={classes.wrap}
                style={{
                         background:`url(${item.url})`
                }}       
                       >

                   </div>

                 </div>
             )) 
    
    )

    render() {
        return (
            <div>
                <section>
                    <div className={classes.dropzone}>
                        <Dropzone
                        onDrop={(e)=>this.onDrop(e)}
                        multiple={false}
                        className={classes.dropzone_box}
                        >

                {({getRootProps,getInputProps})=>
                (
                    <div {...getRootProps()}>
                      <input {...getInputProps()}/>

                      <div className={classes.wrap}>
                      
                         <FontAwesomeIcon
                             icon={faPlusCircle}
                         />
                         <h1>click to select files</h1>
                    </div>        
                    </div>
                )}
                    
                        </Dropzone>                 
                        {this.showUploadedImages()}

                        {
                            this.state.uploading?
                            <div className={classes.dropzone_box}
                            style={{
                                textAlign:'center',
                                paddingTop:'60px'
                            }}
                            >
                           <CircularProgress 
                               style={{color:'#00bcd4'}}
                               thickness={7}
                           />
                            </div>:null
                        }       
                    </div>
                </section>
            </div>
        );
    }
}

export default FileUpload;