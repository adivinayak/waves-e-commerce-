export const validate = (element,formdata=[])=>{
 let error=['true','']

 if(element.validation.required){
     const valid = element.value.trim() !== ''
     const message = `${!valid ? 'this field is required':''};`
      error = !valid ? [valid,message]:error;

}
  if(element.validation.confirm){
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'passwords do not match':''};`
        error = !valid ? [valid,message]:error;
  }
     return error;

}  


export const update = (element,formdata,formname)=>{

 const newformdata= {
          ...formdata
 }
const newelement= {
      ...newformdata[element.id]  

}

newelement.value =  element.event.target.value;





if(element.blur){
      const validData = validate(newelement,formdata)
       newelement.valid = validData[0];
       newelement.validationmessage = validData[1];
}

newelement.touched = element.blur;

newformdata[element.id] = newelement;

return newformdata;

}

export const generateData =(formdata,formname)=>{

      let dataToSubmit = {}

for(let key in formdata){

      if(key !== 'confirmPassword'){
     dataToSubmit[key]= formdata[key].value;

  }
}
return dataToSubmit;
}

export const Isformvalid=(formdata,formname)=>{

      let isformvalid = true;
      for (let key in formdata){
         isformvalid =   formdata[key].valid && isformvalid
}
            return isformvalid;
}

export const populateOptionFields=(formdata,arrayData=[],field)=>{

      const newArray = [];
      const newFormData={...formdata};

      arrayData.forEach(item=>{
            newArray.push({key:item._id,value:item.name})
      })

      newFormData[field].config.options=newArray;
      return newFormData
}

export const resetFields=(formData,formName)=>{
      const newFormData= {
            ...formData
      }
      for(let key in newFormData){
            if(key ==='images'){
                  newFormData[key].value=[];   
            }else{
                  newFormData[key].value='';
            }
            
            newFormData[key].valid=false;
            newFormData[key].touched=false;
            newFormData[key].validationMessage='';
}

          return newFormData;
 }