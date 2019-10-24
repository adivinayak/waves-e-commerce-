import React from 'react';
import classes from '../../../Resources/css/styles.module.css';

const FormField = ({formdata ,change ,id}) => {
    

const showError=()=>{
let errormessage = null;
 if(formdata.validation && !formdata.valid){
   errormessage =(
        
        <div className={classes.error_label}>
        
           {formdata.validationmessage}
        
        </div>

   )

 }

 return errormessage;
}


  const rendertemplate=()=>{
   let formtemplate = null;
   switch(formdata.element){
         case('input'):
         formtemplate=(
           <div className={classes.formBlock}>
      { formdata.showlabel ? 
      <div className={classes.label_inputs}>
        {formdata.config.label}
      </div>:null
      }
      
             <input
                  {...formdata.config}
                  value={formdata.value}
                   onBlur={(event)=> change({id,event,blur:true})}
                   onChange={(event)=> change({id,event})}
             />
                  {showError()}
           </div>

         )
         break;
         case('textarea'):
         formtemplate=(
          <div className={classes.formBlock}>
     { formdata.showlabel ? 
     <div className={classes.label_inputs}>
       {formdata.config.label}
     </div>:null
     }
     
            <textarea
                 {...formdata.config}
                 value={formdata.value}
                  onBlur={(event)=> change({id,event,blur:true})}
                  onChange={(event)=> change({id,event})}
            />
                 {showError()}
          </div>

        )
         break;
         case('select'):
         formtemplate=(
          <div className={classes.formBlock}>
     { formdata.showlabel ? 
     <div className={classes.label_inputs}>
       {formdata.config.label}
     </div>:null
     }
     
            <select
                 value={formdata.value}
                  onBlur={(event)=> change({id,event,blur:true})}
                  onChange={(event)=> change({id,event})}
          >
          <option value="">select one</option>
            {
              formdata.config.options.map(item=>(
                          <option key={item.key}
                                    value={item.key}>
                                 {item.value}
                          </option>
              ))
            }

          </select>
                 {showError()}
          </div>

        )
         break;

         default:
           formtemplate=null


   }
       

       return formtemplate;

    }




    return (
        <div>
            {rendertemplate()}
        </div>
    );
};

export default FormField;