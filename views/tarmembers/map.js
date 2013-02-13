function(doc) {
  if( doc.type == "hpsstarfiledocument"  && doc.members && doc.file){
      for(var i in doc.members){
        emit( doc['members'][i], doc.file);
      }
    } 
}