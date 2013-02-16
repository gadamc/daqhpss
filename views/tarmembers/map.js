function(doc) {
  if( doc.type == "hpsstarfiledocument"  && doc.members && doc.file && isArray(doc.members)){

      for(var i in doc.members){
        emit( doc['members'][i], doc.file);
      }
    } 
}